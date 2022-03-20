import React from "react";

export interface ImgSupplyProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  fill?: string;
}

export const ImgSupply: React.FunctionComponent<ImgSupplyProps> = ({ alt, fill, ...props }) => {
  return (
    <svg width="24" height="24" viewBox="-3 -2 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2.5L14 7V16H2V7L8 2.5ZM8 0L0 6V18H16V6L8 0ZM7.5 6.5V9.5H7V6.5H6V9.5H5.5V6.5H4.5V9.5C4.5 10.33 5.17 11 6 11V15H7V11C7.83 11 8.5 10.33 8.5 9.5V6.5H7.5ZM9 8.5V11.5H10V15H11V6.5C9.9 6.5 9 7.4 9 8.5Z"
        fill={fill ?? "var(--color-action)"}
      />
    </svg>
  );
};
