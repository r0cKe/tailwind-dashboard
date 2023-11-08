import { useEffect } from "react";

const ModuleContainer = ({ children, ...props }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const body = document.body;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = "auto";
      };
    }
  }, []);
  return (
    <div
      className="absolute w-full h-full top-0 left-0 bg-slate-900/75 z-50 grid place-items-center p-3"
      {...props}
    >
      {children}
    </div>
  );
};

export default ModuleContainer;
