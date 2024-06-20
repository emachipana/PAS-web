import { CgClose } from "react-icons/cg";
import NavItem from "./NavItem";
import AsideItem from "./AsideItem";

function AsideMenu({ isOpen, setIsOpen, path }) {
  return (
    <>
      {
        isOpen
        &&
        <div
          className="
            custom:hidden block fixed top-0 bottom-0 right-0 left-0 w-full h-lvh
          bg-black/[0.5] z-40
          "
          onClick={() => setIsOpen(false)}
        />
      }
      <aside
        className={`
          custom:hidden flex w-[260px] top-0 bottom-0 transition-all duration-300
          ${isOpen ? "right-0" : "right-[-260px]"} h-lvh fixed z-50 bg-white
          p-6 pt-12 flex-col items-start justify-start gap-4
        `}
      >
        <CgClose 
          className="absolute top-3 left-3 cursor-pointer text-zinc-700"
          size={25}
          onClick={() => setIsOpen(false)}
        />
        <NavItem
          path={path}
          to="/"
        >
          Inicio
        </NavItem>
        <NavItem 
          to="/servicios"
          path={path}
          isdropbutton={true}
          withlogo={false}
        >
          Servicios
        </NavItem>
        <div className="px-3 mt-[-8px] flex flex-col items-start gap-2">
          <AsideItem 
            path={path}
            to="/servicios/instalacion-vidrios"
          >
            Instalacion de vidrios
          </AsideItem>
          <AsideItem 
            path={path}
            to="instalacion-ventanas-mamparas"
          >
            Instalacion de ventanas y mamparas
          </AsideItem>
          <AsideItem 
            path={path}
            to="/servicios/instalacion-puertas-duchas"
          >
            Instalacion de puertas de duchas
          </AsideItem>
          <AsideItem 
            path={path}
            to="instalacion-barandas-acero"
          >
            Instalacion de barandas de acero
          </AsideItem>
          <AsideItem 
            to="/servicios/instalacion-techos-policarbonato" 
            path={path}
          >
            Instalacion de techos de policarbonato
          </AsideItem>
          <AsideItem 
            to="/servicios/construccion-drywall" 
            path={path}
          >
            Construccion en drywall
          </AsideItem>
        </div>
        <NavItem 
          to="/productos"
          path={path}
          isdropbutton={true}
          withlogo={false}
        >
          Productos
        </NavItem>
        <div className="px-3 mt-[-8px] flex flex-col items-start gap-2">
          <AsideItem
            path={path} 
            to="/productos/vidrios-cristales"
          >
            Vidrios y cristales
          </AsideItem>
          <AsideItem
            path={path} 
            to="/productos/espejos"
          >
            Espejos
          </AsideItem>
          <AsideItem
            path={path} 
            to="/productos/perfiles-aluminio"
          >
            Perfiles de aluminio
          </AsideItem>
          <AsideItem
            path={path} 
            to="/productos/acrilico"
          >
            Acrilico
          </AsideItem>
          <AsideItem
            path={path} 
            to="/productos/policarbonato"
          >
            Policarbonato
          </AsideItem>
        </div>
        <NavItem
          path={path}
          to="/proyectos"
        >
          Proyectos
        </NavItem>
        <NavItem
          path={path}
          to="/nosotros"
        >
          Nosotros
        </NavItem>
        <NavItem
          path={path}
          to="/contacto"
        >
          Contacto
        </NavItem>
      </aside>
    </>
  );
}

export default AsideMenu;
