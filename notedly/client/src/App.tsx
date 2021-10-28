import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { Navigation } from "./components/Navigation"
import { Pages } from "./pages"

export const App = () => {
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
