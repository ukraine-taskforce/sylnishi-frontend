import React from "react";

export interface ImgExternalLinkProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  fill?: string;
}

export const ImgExternalLink: React.FunctionComponent<ImgExternalLinkProps> = ({ alt, fill, ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9988 4.77751H4.77751C3.79068 4.77751 3 5.56863 3 6.55502V18.9976C3 19.4988 3.20743 19.9532 3.54332 20.2769C3.86185 20.585 4.29668 20.7751 4.77751 20.7751H17.2201C17.4353 20.7751 17.6471 20.7356 17.845 20.661C18.0802 20.5729 18.2963 20.4353 18.4768 20.2543C18.8101 19.9211 18.9976 19.4689 18.9976 18.9976V13.2207H17.2201V18.9976H4.77751V6.55502H10.9988V4.77751Z"
        fill={fill ?? "var(--color-action)"}
      />
      <path
        d="M19.2215 6.03539V10.1795L21 10.1732V3H13.8268L13.8205 4.7785H17.9646L11.8876 10.8556L13.1445 12.1124L19.2215 6.03539Z"
        fill={fill ?? "var(--color-action)"}
      />
    </svg>
  );
};
