export interface TextProps {
  alignment?: "center" | "left" | "right";
  variant?: "normal" | "light" | "bold";
  className?: string;
  color?: string;
}

export const Text: React.FunctionComponent<TextProps> = ({ alignment = "left", variant = "normal", className, color, children }) => {
  return (
    <p
      className={className}
      color={color ?? ""}
      style={{ textAlign: alignment, opacity: variant === "light" ? 0.6 : 1, fontWeight: variant === "bold" ? "bold" : "regular" }}
    >
      {children}
    </p>
  );
};
