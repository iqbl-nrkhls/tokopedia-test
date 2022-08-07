/** @jsxImportSource @emotion/react */
import { ReactNode } from "react"
import { css } from '@emotion/react'
import { Header } from "./header";

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main css={css({
        paddingTop: '60px',
      })}>
        {children}
      </main>
    </>
  )
}
