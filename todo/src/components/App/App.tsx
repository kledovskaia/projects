import { Navigate, Route, Routes } from "react-router"
import { Home } from "../../pages/Home/Home"
import { EditModal } from "../EditModal/EditModal"
import { AppContainer } from "./styles"

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <EditModal />
    </AppContainer>
  )
}

export default App
