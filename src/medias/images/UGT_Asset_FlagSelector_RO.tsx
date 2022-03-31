import React from "react";

export interface ImgFlagRoProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagRo: React.FunctionComponent<ImgFlagRoProps> = ({ alt, ...props }) => {
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
      <path d="M6 0H14V16H6V0Z" fill="#FFD400" />
      <path
        d="M20 14C20 15.1046 19.1046 16 18 16L14 16L14 4.29138e-07L18 7.78829e-07C19.1046 8.75393e-07 20 0.895432 20 2L20 14Z"
        fill="#CF2A20"
      />
      <path d="M0 2C0 0.895431 0.895431 0 2 0H6V16H2C0.89543 16 0 15.1046 0 14V2Z" fill="#1337B8" />
    </svg>
  );
};
