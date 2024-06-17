function NavItem({ to, path, children }) {
  const isActive = to === path;
  const color = isActive ? "text-blue-500" : "text-zinc-600";

  return (
    <a
      className={`font-bold text-base ${color} cursor-pointer transition duration-300 hover:text-blue-500`}
      href={isActive ? null : to}
    >
      { children }
    </a>
  );
}

export default NavItem;
