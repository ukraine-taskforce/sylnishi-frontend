import React from "react";

export interface ImgFlagUkProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagUk: React.FunctionComponent<ImgFlagUkProps> = ({ alt, ...props }) => {
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
        d="M0 8H20V14C20 15.1046 19.1046 16 18 16H2C0.895431 16 0 15.1046 0 14V8Z"
        fill="#1337B8"
      />
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V8H0V2Z"
        fill="#FFD400"
      />
    </svg>
  );
};
