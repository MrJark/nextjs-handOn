interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const SidebarMenu = ({ icon, path, subtitle, title }: Props) => {
  return (
    <a
      href={path}
      className="w-full mb-3 rounded-lg px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-900 hover:bg-white/5 transition ease-linear duration-150"
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </a>
  );
};
