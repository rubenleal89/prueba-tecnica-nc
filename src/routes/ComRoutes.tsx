import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PageHome } from "../Pages/Home/Home"
import { PageSolution } from "../Pages/Solution/Solution"
import { IntNavLink } from '../utils/interface';
import { ComponentInfo } from "../components/InfoAlert/Info";

const NavArrLink:IntNavLink[] = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Solutions",
      path: "/solutions"
    },
    {
      title: "Recepción",
      path: "/recepción"
    },
    {
      title: "Cómo Funciona",
      path: "/funcionalidad"
    },
]

export const ComRoutes = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <PageHome NavArrLink={NavArrLink}/> } />
              <Route path='/solutions' element={ <PageSolution NavArrLink={NavArrLink}/> } />
              <Route path='/recepción' element={ <ComponentInfo NavArrLink={NavArrLink}/> } />
              <Route path='/funcionalidad' element={ <ComponentInfo NavArrLink={NavArrLink}/> } />
          </Routes>
      </BrowserRouter>
    </>
  )
}
