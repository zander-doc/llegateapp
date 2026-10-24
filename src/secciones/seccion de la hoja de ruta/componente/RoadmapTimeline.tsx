import { RoadmapPhase } from "@/sections/RoadmapSection/components/RoadmapPhase";

export const RoadmapTimeline = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] relative no-underline">
      <div className="bg-white/10 box-border caret-transparent outline-[3px] absolute no-underline w-px left-[21px] inset-y-9"></div>
      <RoadmapPhase
        phase="FASE 01"
        date="MAYO 2026"
        title="Mototaxi"
        features={[
          "Mototaxi en Venezuela",
          "50% OFF primer viaje",
          "Pago Móvil al chofer",
        ]}
        connectorVariant="bg-orange-500 shadow-[rgba(255,106,13,0.12)_0px_0px_0px_6px] border-orange-500"
        phaseVariant="text-orange-500"
        dateVariant="bg-orange-500 text-neutral-950"
        featureVariant="bg-orange-500/10 text-orange-500 border-orange-500/30"
        showConnectorDot={true}
      />
      <RoadmapPhase
        phase="FASE 02"
        date="AGOSTO 2026"
        title="Taxi"
        features={[
          "Taxi en carro",
          "Más espacio y equipaje",
          "Tarifa clara antes de pedir",
          "Pago Móvil al chofer",
        ]}
        connectorVariant="bg-orange-500 shadow-[rgba(255,106,13,0.12)_0px_0px_0px_6px] border-orange-500"
        phaseVariant="text-orange-500"
        dateVariant="bg-orange-500 text-neutral-950"
        featureVariant="bg-orange-500/10 text-orange-500 border-orange-500/30"
        showConnectorDot={true}
      />
      <RoadmapPhase
        phase="FASE 03"
        date="SEPTIEMBRE 2026"
        title="Llegateapp Para Ellas"
        features={[
          "Conductoras verificadas",
          "Pasajeras mujeres",
          "Doble protocolo de seguridad",
        ]}
        connectorVariant="bg-neutral-950 border-white/20"
        phaseVariant="text-white/80"
        dateVariant="text-white/80 border border-solid border-white/10"
        featureVariant="bg-white/0 text-white/70 border-white/10"
        showConnectorDot={false}
      />
      <RoadmapPhase
        phase="FASE 04"
        date="OCTUBRE 2026"
        title="Ejecutivo & Aeropuerto"
        features={[
          "Plan ejecutivo",
          "Reservas programadas",
          "Aeropuerto",
          "Viajes de larga distancia",
        ]}
        connectorVariant="bg-neutral-950 border-white/20"
        phaseVariant="text-white/80"
        dateVariant="text-white/80 border border-white/10"
        featureVariant="bg-white/0 text-white/70 border-white/10"
        showConnectorDot={false}
      />
      <RoadmapPhase
        phase="FASE 05"
        date="NOVIEMBRE 2026"
        title="Delivery & Mandados"
        features={[
          "Comida y mercados",
          "Mandados express",
          "Encomiendas",
          "Documentos",
        ]}
        connectorVariant="bg-neutral-950 border-white/20"
        phaseVariant="text-white/80"
        dateVariant="text-white/80 border border-white/10"
        featureVariant="bg-white/0 text-white/70 border-white/10"
        showConnectorDot={false}
      />
    </div>
  );
};