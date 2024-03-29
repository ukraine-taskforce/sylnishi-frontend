import React from "react";

export interface ImgFlagHuProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagHu: React.FunctionComponent<ImgFlagHuProps> = ({ alt, ...props }) => {
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
      <path d="M0.5 4.5H19.5V11.5H0.5V4.5Z" fill="white" stroke="#F1F1F1" />
      <path
        d="M20 14C20 15.1046 19.1046 16 18 16L2 16C0.895432 16 7.8281e-08 15.1046 1.74846e-07 14L4.37114e-07 11L20 11L20 14Z"
        fill="#00B17C"
      />
      <path d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V5H0V2Z" fill="#CF2A20" />
    </svg>
  );
};
