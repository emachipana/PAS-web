import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import NavItem from "./NavItem";

function Navbar({ path }) {
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
          <NavItem
            path={path}
            to="/servicios"
          >
            Servicios
          </NavItem>
          <NavItem
            path={path}
            to="/productos"
          >
            Productos
          </NavItem>
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
