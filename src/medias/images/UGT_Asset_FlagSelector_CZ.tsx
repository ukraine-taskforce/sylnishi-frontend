import React from "react";

export interface ImgFlagCzProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgFlagCz: React.FunctionComponent<ImgFlagCzProps> = ({ alt, ...props }) => {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Boolean(alt) && <title>{alt}</title>}
      <rect x="0.5" y="0.5" width="19" height="15" rx="1.5" fill="white" stroke="#F1F1F1" />
      <path
        d="M20 14C20 15.1046 19.1046 16 18 16L2 16C0.895432 16 -7.8281e-08 15.1046 -1.74846e-07 14L-6.99382e-07 8L20 8L20 14Z"
        fill="#FF5247"
      />
      <path
        d="M2 16L10 8L2 -1.74846e-07C0.895431 -7.8281e-08 7.8281e-08 0.895431 1.74846e-07 2L1.22392e-06 14C1.32048e-06 15.1046 0.895432 16 2 16Z"
        fill="#0729A0"
      />
    </svg>
  );
};
