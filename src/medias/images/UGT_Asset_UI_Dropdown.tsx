import React from "react";

export interface ImgDropdownProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
  fill?: string;
}

export const ImgDropdown: React.FunctionComponent<ImgDropdownProps> = ({ alt, fill, ...props }) => {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {Boolean(alt) && <title>{alt}</title>}
      <path d="M12 1.41L10.59 -6.16331e-08L6 4.58L1.41 -4.62904e-07L-6.16331e-08 1.41L6 7.41L12 1.41Z" fill={fill ?? "var(--color-secondary)"} />
    </svg>
  );
};
