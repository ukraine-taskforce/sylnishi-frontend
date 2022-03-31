import React from "react";

export interface ImgFlagPlProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagPl: React.FunctionComponent<ImgFlagPlProps> = ({ alt, ...props }) => {
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
        d="M0.5 7.5H19.5V14C19.5 14.8284 18.8284 15.5 18 15.5H2C1.17157 15.5 0.5 14.8284 0.5 14V7.5Z"
        fill="white"
        stroke="#F1F1F1"
      />
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z"
        fill="#CF2A20"
      />
    </svg>
  );
};
