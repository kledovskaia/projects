import { BackToTop } from './components/BackToTop/BackToTop'
// import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Pages } from './pages'

export const App = () => {
  return (
    <>
      <Layout>
        <BackToTop>
          <Pages />
        </BackToTop>
      </Layout>
    </>
  )
}
