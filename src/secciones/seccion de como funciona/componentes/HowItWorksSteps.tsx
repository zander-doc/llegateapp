import { StepCard } from "@/sections/HowItWorksSection/components/StepCard";

export const HowItWorksSteps = () => {
  return (
    <div className="border-b-gray-200 border-l-gray-200 border-r-gray-200 box-border caret-transparent grid grid-cols-[1fr] outline-[3px] no-underline border-t-white/10 border-t border-solid md:grid-cols-[repeat(3,1fr)]">
      <StepCard
        stepLabel="PASO 01"
        title="Pide tu Llegateapp"
        description="Abre la app, marca tu destino y elige moto o carro. Vemos al instante qué conductores están más cerca de ti."
        variantClass="border-l-gray-200 border-r-stone-50 border-t-gray-200 border-r-0 border-b-white/10 border-b md:border-b-gray-200 md:border-r-white/10 md:border-b-0 md:border-r"
      />
      <StepCard
        stepLabel="PASO 02"
        title="Tu chofer en camino"
        description="Recibes su nombre, foto, placa y rating. Lo sigues en el mapa en tiempo real hasta que llega."
        variantClass="border-l-gray-200 border-r-stone-50 border-t-gray-200 border-r-0 border-b-white/10 border-b md:border-b-gray-200 md:border-r-white/10 md:border-b-0 md:border-r"
      />
      <StepCard
        stepLabel="PASO 03"
        title="Llegas y listo"
        description="Le pagas al chofer vía Pago Móvil. Calificas tu experiencia. Tarifa siempre clara, sin sorpresas."
        variantClass=""
      />
    </div>
  );
};