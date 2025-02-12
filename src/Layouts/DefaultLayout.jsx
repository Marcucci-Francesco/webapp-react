import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { useGlobalContext } from "../context/GlobalContext";

const DefaultLayout = () => {

  const { isLoading } = useGlobalContext();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Loader />}
    </>
  )
}

export default DefaultLayout