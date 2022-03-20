import React from "react";

export interface ImgBrandProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
}

export const ImgBrand: React.FunctionComponent<ImgBrandProps> = ({ alt, ...props }) => {
  return (
    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {Boolean(alt) && <title>{alt}</title>}
      <g clipPath="url(#clip0_375_3767)">
        <circle cx="31" cy="31" r="31" fill="white" />
        <path
          d="M54.3169 51.4712C59.2807 45.8079 62.0121 38.5307 62.0003 31C62.0003 14.5902 49.3045 1.14025 33.2197 0V30.1599L54.3169 51.4712Z"
          fill="#005BBB"
        />
        <path d="M10.6816 54.4636C15.7895 58.9193 22.2232 61.5679 28.9875 61.9999V36.125L10.6816 54.4636Z" fill="#FFD500" />
        <path
          d="M28.9878 0C12.8051 1.03964 3.80359e-05 14.5197 3.80359e-05 31C-0.0117559 38.5307 2.71958 45.8079 7.6834 51.4712L28.9878 30.1599V0Z"
          fill="#005BBB"
        />
        <path d="M33.2197 61.987C39.9103 61.5145 46.2644 58.8732 51.3184 54.4636L33.2197 36.125V61.987Z" fill="#FFD500" />
      </g>
      <defs>
        <clipPath id="clip0_375_3767">
          <rect width="62" height="62" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
