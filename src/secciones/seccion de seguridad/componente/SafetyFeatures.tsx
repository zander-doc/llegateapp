import { SafetyFeatureCard } from "@/sections/SafetySection/components/SafetyFeatureCard";

export const SafetyFeatures = () => {
  return (
    <div className="content-start box-border caret-transparent gap-x-4 grid grid-cols-[1fr] min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 no-underline md:grid-cols-[1fr_1fr]">
      <SafetyFeatureCard
        title="Verificación de cédula y licencia"
        description="Confirmamos que cada chofer es quien dice ser, maneje moto o carro"
      />
      <SafetyFeatureCard
        title="Antecedentes penales revisados"
        description="Sin excepciones. Sin atajos."
      />
      <SafetyFeatureCard
        title="Botón de pánico en el viaje"
        description="Alerta directa a contactos y soporte"
      />
      <SafetyFeatureCard
        title="Comparte tu ruta en tiempo real"
        description="Tu familia ve el viaje completo"
      />
    </div>
  );
};