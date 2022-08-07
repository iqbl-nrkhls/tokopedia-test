import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

function Header() {
  return (
    <header>
      <div>
        ANIMOUS
      </div>
    </header>
  );
}
