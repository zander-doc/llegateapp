import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-asphalt-950/80 border-b border-asphalt-800">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/img/uploaded-asset-1792840981980-0.png"
            alt="Logo de Llegateapp — app de mototaxis y taxis"
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[220px]"
          />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-asphalt-200">
          <a href="#servicios" className="hover:text-neonOrange-500 transition-colors">Servicios</a>
          <a href="#conductores" className="hover:text-neonOrange-500 transition-colors">Conductores</a>
          <a href="#patrocinantes" className="hover:text-neonOrange-500 transition-colors">Patrocinantes</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#descarga" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-asphalt-100 border border-asphalt-700 hover:border-neonOrange-500 transition-colors">Iniciar sesión</a>
          <a href="#descarga" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-neonOrange-500 text-asphalt-950 hover:bg-neonOrange-400 transition-colors shadow-lg shadow-neonOrange-500/30">Descargar App</a>
        </div>
      </nav>
    </header>
  );
}
