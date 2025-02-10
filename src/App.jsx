import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './Layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import FilmDetails from './pages/FilmDetails'
import NotFound from './pages/NotFound'
import Form from './pages/Form';
import { GlobalProvider } from "./context/GlobalContext"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dettagli-film/:id" element={<FilmDetails />} />
            <Route path="/dettagli-film/:id/reviews" element={<Form />} />
            <Route path="/error" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
