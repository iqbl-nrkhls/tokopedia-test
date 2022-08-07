/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { mq } from 'libs/emotion/mediaQuery';
import { menu } from 'libs/models/constant/menu';
import { ForwardedRef, forwardRef, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type MobileMenuProps = {
  show: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const MobileMenu = forwardRef(({ show, onClick }: MobileMenuProps, ref: ForwardedRef<HTMLElement>) => {

  return (
    <div css={css({
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100%',
      transition: '.5s',
      background: show ? '#000000af' : '',
      visibility: show ? 'visible' : 'hidden',
      [mq['md']]: {
        display: 'none'
      }
    })}>
      <nav ref={ref} css={css({
        width: '70%',
        height: '100%',
        background: '#fff',
        transition: '.5s',
        transform: `translateX(${show ? '0' : '-100%'})`
      })}>
        <ul css={css({
          margin: 0,
          padding: '20px',
          listStyle: 'none'
        })}>
          {menu.map((e, key) => (
            <li key={key}>
              <Link to={e.path}
                onClick={onClick}
                css={css({
                  display: 'block',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#000',
                  padding: '20px 10px',
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
    </div>
  )
})