/** @jsxImportSource @emotion/react */
import { MutableRefObject, useState } from 'react';
import useOutsideClick from 'libs/helpers/useOutsideClick';
import { useRef } from 'react';
import { Hamburger } from './Hamburger';
import { MobileMenu } from './MobileMenu';

export function MobileNav() {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useOutsideClick([ref], () => setShowMenu(false))

  return (
    <>
      <Hamburger onClick={() => setShowMenu(true)} />
      <MobileMenu ref={ref} show={showMenu} onClick={() => setShowMenu(false)} />
    </>
  )
}