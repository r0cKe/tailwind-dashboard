const ModuleContainer = ({ children, ...props }) => {
  return (
    <div
      className="absolute w-full h-full top-0 left-0 bg-slate-900/75 z-50 grid place-items-center"
      {...props}
    >
      {children}
    </div>
  );
};

export default ModuleContainer;
