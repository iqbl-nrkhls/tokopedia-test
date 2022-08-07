/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type CardProps = {
  id: string | number;
  coverImage: string;
  title: string;
}

export function Card({ id, coverImage, title }: CardProps) {
  return (
    <Link
      to={`/anime/${id}`}
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