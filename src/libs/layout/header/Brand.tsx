/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";

export function Brand() {
  return (
    <h1 css={css({
      margin: 0,
      fontSize: '20px',
      paddingRight: '40px',
      [mq['md']]: {
        borderRight: '1px solid #ddd',
        fontSize: '24px'
      },
      [mq['lg']]: {
        fontSize: '28px'
      }
    })}>
      ANIMOUS
    </h1>
  )
}