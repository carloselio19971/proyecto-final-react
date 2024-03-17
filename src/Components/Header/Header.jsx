import './Header.css'
import { InfoAtencion } from './InforAtencionHeader/InfoAtencion'
import { MenuNavegacion } from './MenuNavegacion/MenuNavegacion'
import { SiteHeader } from './SiteHeader/SiteHeader'
export const Header = () => {
  return (
    <>
    <InfoAtencion/>
    <SiteHeader/>
    <MenuNavegacion/>
    </>
   
  )
}

