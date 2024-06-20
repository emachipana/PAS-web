function AsideItem({ to, path, children }) {
  const itemClass = `text-sm font-medium cursor-pointer hover:text-blue-500 transition leading-5 ${path === to ? "text-blue-500" : "text-zinc-600"}`;

  return (
    <>
      <a 
        className={itemClass}
        href={to}
      >
        { children }
      </a>
      <hr className="my-[-6px] w-full"/>
    </>
  );
}

export default AsideItem;
