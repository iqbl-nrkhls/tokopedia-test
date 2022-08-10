/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  coverImage: string;
  title: string;
  href: string;
  extraButton?: ReactNode;
};

export function Card({ coverImage, title, href, extraButton }: CardProps) {
  return (
    <Link
      to={href}
      css={css({
        display: "block",
        background: "#fff",
        boxShadow: "0 0 10px 5px #00000007",
        borderRadius: "10px",
        textDecoration: "none",
        color: "#000",
        overflow: "hidden",
        transition: ".5s",
        ":hover,:focus": {
          transform: "scale(1.05)",
        },
        ":hover #extra-button": { opacity: "1" },
      })}
    >
      <div css={css({ position: "relative" })}>
        <img
          src={`${coverImage}`}
          alt="cover"
          css={css({
            width: "100%",
            aspectRatio: "1",
            objectFit: "cover",
          })}
        />
        <div
          id="extra-button"
          css={css({
            position: "absolute",
            bottom: "10px",
            right: "10px",
            transition: ".5s",
            opacity: "0",
          })}
        >
          {extraButton}
        </div>
      </div>
      <h3 css={css({ margin: "10px" })}>{title}</h3>
    </Link>
  );
}
