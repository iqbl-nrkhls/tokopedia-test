/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={className}
      css={css({
        background: "transparent",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: ".5s",
        ":hover": { background: "#00000007" },
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
