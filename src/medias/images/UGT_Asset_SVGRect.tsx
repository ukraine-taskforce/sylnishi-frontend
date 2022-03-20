import React from "react";

export interface AssetRectProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const AssetRect: React.FunctionComponent<AssetRectProps> = ({ width = 12, height = 80, ...props }) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={width} height={height} fill="var(--color-primary)" />
    </svg>
  );
};
