import { forwardRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const NavItem = forwardRef((props, ref) => {
  const { path, to, children, isdropbutton } = props;
  const isActive = isdropbutton ? path.includes(to) : (to === path);
  const className = `font-semibold text-base ${isActive ? "text-blue-500" : "text-zinc-600"} cursor-pointer transition duration-300 hover:text-blue-500`;

  return (
    isdropbutton
    ? <div 
        ref={ref}
        className={"flex items-center justify-center gap-1 " + className}
        {...props}
      >
        <p>{ children }</p>
        <FaAngleDown size={18} />
      </div>
    : <a
        ref={ref}
        {...props}
        className={className}
        href={isActive ? null : to}
      >
        { children }
      </a>
  );
});

export default NavItem;
