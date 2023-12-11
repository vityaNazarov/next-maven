"use client";
import Image from "next/image";
import { useState } from "react";

const ImageViewer = ({ imgs }) => {
  const [data, setData] = useState({ image: imgs[0], index: 0 });

  return (
    <div className="product-card-gallery">
      <Image
        className="product-card-gallery-img"
        width="520"
        height="520"
        src={data ? data.image : imgs[0]}
        alt=""
      />
      <div className="product-card-gallery-secondary">
        {imgs.map((image, index) => {
          return index < 4 ? (
            <Image
              onClick={() => setData({ image, index })}
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
