import "./style.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="layout component">{children}</section>
}
