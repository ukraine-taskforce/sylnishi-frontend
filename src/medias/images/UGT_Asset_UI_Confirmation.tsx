import React from "react";

export interface ImgConfirmationProps extends React.SVGProps<SVGSVGElement> {
  alt: string;
  background?: "white" | "none";
  fill?: "white" | "action";
}

export const ImgConfirmation: React.FunctionComponent<ImgConfirmationProps> = ({
  alt,
  background = "white",
  fill = "action",
  ...props
}) => {
  return (
    <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {Boolean(alt) && <title>{alt}</title>}
      <rect width="83" height="83" rx="41.5" fill={background} />
      <g clipPath="url(#clip0_375_3880)">
        <path
          d="M33.6586 51.1142L24.0444 41.5L20.7705 44.7509L33.6586 57.6389L61.3252 29.9723L58.0744 26.7214L33.6586 51.1142Z"
          fill={fill === "action" ? "#159BFF" : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_375_3880">
          <rect width="55.3333" height="55.3333" fill="white" transform="translate(12.9082 13.8333)" />
        </clipPath>
      </defs>
    </svg>
  );
};
