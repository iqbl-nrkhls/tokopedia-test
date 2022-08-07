/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";
import { menu } from "libs/models/constant/menu";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav css={css({
      display: 'none',
      [mq['md']]: {
        display: 'block'
      }
    })}>
      <ul css={css({
        display: 'flex',
        gap: '5px',
        listStyle: 'none',
      })}>
        {menu.map((e, key) => (
          <li key={key}>
            <Link to={e.path}
            css={css({
              textDecoration: 'none',
              color: '#000',
              padding: '10px',
              borderRadius: '5px',
              ":hover": {
                background: '#00000007'
              },
              ":focus": {
                background: '#0000001f'
              }
            })}>
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}