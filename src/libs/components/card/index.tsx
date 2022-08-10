/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type CardProps = {
  coverImage: string;
  title: string;
  href: string;
};

export function Card({ coverImage, title, href }: CardProps) {
  return (
    <Link
      to={href}
      css={css({
        display: 'block',
        background: '#fff',
        boxShadow: '0 0 10px 5px #00000007',
        borderRadius: '10px',
        textDecoration: 'none',
        color: '#000',
        overflow: 'hidden',
        transition: '.5s',
        ':hover,:focus': {
          transform: 'scale(1.05)'
        }
      })}
    >
      <img
        src={`${coverImage}`}
        alt="cover"
        css={css({
          width: '100%',
          aspectRatio: '1',
          objectFit: 'cover'
        })}
      />
      <h3 css={css({
        margin: '10px'
      })}>{title}</h3>
    </Link >
  )
}