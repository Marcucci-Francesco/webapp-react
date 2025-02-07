import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout