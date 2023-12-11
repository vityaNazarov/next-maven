import React from "react";
import ContentLoader from "react-content-loader";

const ProductSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={410}
    height={500}
    viewBox="0 0 410 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="410" rx="10" ry="10" width="151" height="39" />
    <rect x="340" y="423" rx="10" ry="10" width="50" height="50" />
    <rect x="5" y="0" rx="50" ry="50" width="400" height="400" />
    <rect x="5" y="460" rx="5" ry="5" width="120" height="27" />
  </ContentLoader>
);

export default ProductSkeleton;
