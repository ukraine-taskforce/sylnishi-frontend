import React from "react";

export interface ImgFlagItProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagIt: React.FunctionComponent<ImgFlagItProps> = ({ alt, ...props }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {Boolean(alt) && <title>{alt}</title>}
      <path
        d="M4.5 2C4.5 1.17157 5.17157 0.5 6 0.5H15.5V15.5H6C5.17157 15.5 4.5 14.8284 4.5 14V2Z"
        fill="white"
        stroke="#F1F1F1"
      />
      <path
        d="M20 14C20 15.1046 19.1046 16 18 16L14 16L14 -5.24537e-07L18 -1.74846e-07C19.1046 -7.8281e-08 20 0.895431 20 2L20 14Z"
        fill="#CF2A20"
      />
      <path d="M0 2C0 0.895431 0.895431 0 2 0H6V16H2C0.89543 16 0 15.1046 0 14V2Z" fill="#00B17C" />
    </svg>
  );
};
