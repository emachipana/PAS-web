import { IoMdMail } from "react-icons/io";
import { FaChevronDown, FaPhone } from "react-icons/fa6";
import NavItem from "./NavItem";
import { Dropdown, DropdownItem } from "flowbite-react";

function Navbar({ path }) {
  const dropItemClass = "text-[15px] font-medium text-zinc-600 max-w-[205px]";

  return (
    <div className="w-full h-[100px] sticky top-0 shadow-md">
      <section className="h-[30px] bg-primary flex items-center justify-end gap-4 px-2 py-1 text-white">
        <div className="flex items-center justify-center gap-1">
          <IoMdMail size={15} />
          <p className="font-medium text-sm">proyectos@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaPhone size={14} />
          <p className="font-medium text-sm">+51 999888777</p>
        </div>
      </section>
      <nav className="w-full flex items-center justify-between h-[70px] px-14">
        <h1 className="font-bold text-6xl text-primary">V<span className="text-secondary">A</span></h1>
        <div className="flex items-center justify-center gap-14">
          <NavItem
            path={path}
            to="/"
          >
            Inicio
          </NavItem>
          <Dropdown
            renderTrigger={() => <NavItem to="/servicios" isdropbutton="true" path={path}>Servicios</NavItem>}
          >
            <DropdownItem as="a" href="/servicios/instalacion-vidrios" className={dropItemClass}>
              Instalacion de vidrios
            </DropdownItem>
            <DropdownItem as="a" href="/servicios/instalacion-ventanas-mamparas" className={dropItemClass}>
              Instalacion de ventanas y mamparas
            </DropdownItem>
            <DropdownItem as="a" href="/servicios/instalacion-puertas-duchas" className={dropItemClass}>
              Instalacion de puertas de duchas
            </DropdownItem>
            <DropdownItem as="a" href="/servicios/instalacion-barandas-acero" className={dropItemClass}>
              Instalacion de barandas de acero
            </DropdownItem>
            <DropdownItem as="a" href="/servicios/instalacion-techos-policarbonato" className={dropItemClass}>
              Instalacion de techos de policarbonato
            </DropdownItem>
            <DropdownItem as="a" href="/servicios/construccion-drywall" className={dropItemClass}>
              Construccion en drywall
            </DropdownItem>
          </Dropdown>
          <Dropdown
            renderTrigger={() => <NavItem to="/productos" isdropbutton="true" path={path}>Productos</NavItem>}
          >
            <DropdownItem as="a" href="/productos/vidrios-cristales" className={dropItemClass}>
              Vidrios y cristales
            </DropdownItem>
            <DropdownItem as="a" href="/productos/espejos" className={dropItemClass}>
              Espejos
            </DropdownItem>
            <DropdownItem as="a" href="/productos/perfiles-aluminio" className={dropItemClass}>
              Perfiles de aluminio
            </DropdownItem>
            <DropdownItem as="a" href="/productos/acrilico" className={dropItemClass}>
              Acrilico
            </DropdownItem>
            <DropdownItem as="a" href="/productos/policarbonato" className={dropItemClass}>
              Policarbonato
            </DropdownItem>
          </Dropdown>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
