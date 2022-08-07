/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Brand } from './Brand';
import { MobileNav } from './mobileNav';
import { Nav } from './Nav';

export function Header() {
  return (
    <header css={css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
    })}>
      <div css={css({
        padding: '10px 15px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        boxShadow: '0 2px 10px 5px #00000009'
      })}>
        <Brand />
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
}
