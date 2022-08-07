/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mq } from 'libs/emotion/mediaQuery';
import { MouseEventHandler } from 'react';

type HamburgerProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Hamburger ({ onClick }: HamburgerProps) {
  return (
    <button css={css({
      padding: '5px',
      marginLeft: 'auto',
      background: 'transparent',
      borderRadius: '5px',
      border: '1px solid #ddd',
      [mq['md']]: {
        display: 'none'
      }
    })}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" css={css({ display: 'block' })} viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </button>
  )
}