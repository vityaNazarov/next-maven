"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import styles from "./Furniture3DModal.module.css";

const Furniture3DModal = ({ id, lang, quality = "medium" }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousOverflowRef = useRef("");
  const isOpenRef = useRef(false);

  const hasModel = typeof id === "number";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const close = useCallback(() => {
    isOpenRef.current = false;
    setIsOpen(false);
  }, []);

  // Якщо змінився товар (id) або модель зникла — закриваємо модалку
  useEffect(() => {
    close();
  }, [id, close]);

  const open = () => {
    if (!hasModel || isOpenRef.current) {
      return;
    }

    isOpenRef.current = true;
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflowRef.current;
      triggerRef.current?.focus();
    };
  }, [isOpen, close]);

  const triggerLabel = t("Product_id_view_in_3d");

  const trigger = hasModel ? (
    <button
      ref={triggerRef}
      type="button"
      className="product-card-gallery-link product-card-gallery-link-none"
      onClick={open}
    >
      {triggerLabel}
    </button>
  ) : (
    <button
      type="button"
      className="product-card-gallery-link product-card-gallery-link-none"
      tabIndex={-1}
      aria-hidden="true"
      style={{ visibility: "hidden" }}
    >
      {triggerLabel}
    </button>
  );

  const iframeSrc = hasModel
    ? `https://greatcatalog.store/p/?id=${id}&lang=${lang}&quality=${quality}`
    : "";

  const dialog =
    isMounted &&
    isOpen &&
    hasModel &&
    createPortal(
      <div className={styles.overlay} onClick={close}>
        <div
          className={styles.window}
          role="dialog"
          aria-modal="true"
          aria-label={t("Product_id_view_in_3d_dialog", "3D view")}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={close}
          >
            ✕
          </button>
          <iframe
            src={iframeSrc}
            title="3D view"
            allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
            className={styles.iframe}
          />
        </div>
      </div>,
      document.body
    );

  return (
    <>
      {trigger}
      {dialog}
    </>
  );
};

export default Furniture3DModal;