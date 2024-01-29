"use client";
import Image from "next/image";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const ImageViewer = ({ imgs }) => {
  const [data, setData] = useState({ image: imgs[0], index: 0 });
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image, index) => {
    if (selectedImage === image) {
      // Если выбрана та же самая картинка, не отображать loader
      return;
    }

    setLoading(true);
    setData({ image, index });
    setSelectedImage(image);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="product-card-gallery">
      {loading && (
        <div className="loader-container">
          <ClipLoader
            className="image-viewer-loader"
            color="#232427"
            size={30}
          />
        </div>
      )}
      <Image
        className={`product-card-gallery-img ${loading ? "hidden" : ""}`}
        width="520"
        height="520"
        src={data ? data.image : imgs[0]}
        alt=""
        onLoad={handleImageLoad}
      />
      <div className="product-card-gallery-secondary">
        {imgs.map((image, index) => {
          return index < 4 ? (
            <Image
              onClick={() => handleImageClick(image, index)}
              key={index}
              className="product-card-gallery-secondary-img"
              width="137"
              height="137"
              src={image}
              alt=""
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ImageViewer;
