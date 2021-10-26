import { useEffect } from "react"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { Navigation } from "./components/Navigation"
import { useAppQuery } from "./hooks/useAppQuery"
import { Pages } from "./pages"

export const App = () => {
  const { data } = useAppQuery<{ isLoggedIn: boolean }>("IS_LOGGED_IN")

  useEffect(() => {
    if (!data) return
    console.log(data.isLoggedIn)
  }, [data])

  return (
    <>
      <Layout>
        <Header />
        <Navigation />
        <Pages />
      </Layout>
    </>
  )
}
