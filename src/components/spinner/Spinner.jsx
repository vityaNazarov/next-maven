import React from "react";
import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <span className="spinner">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#A8A198"
        barColor="#A8A198"
      />
    </span>
  );
}
