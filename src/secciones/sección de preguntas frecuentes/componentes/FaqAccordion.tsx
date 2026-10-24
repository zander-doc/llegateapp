import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

export const FaqAccordion = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] no-underline">
      <FaqItem
        question="¿Dónde descargo la app?"
        answer="Llegateapp ya está disponible en toda Venezuela. Descárgala gratis en Google Play. Si tienes iPhone, la usas directo desde el navegador — sin instalar nada."
      />
      <FaqItem
        question="¿Llegateapp tiene taxis además de mototaxis?"
        answer="Sí. Desde la misma app pides mototaxi o taxi en carro. Al marcar tu destino eliges el tipo de vehículo y ves la tarifa de cada uno antes de confirmar el viaje."
      />
      <FaqItem
        question="¿Cuánto cuesta un viaje?"
        answer="La tarifa depende de la distancia y del vehículo que elijas — moto o carro — pero siempre la ves antes de confirmar el viaje. Cero regateo, cero sorpresas."
      />
      <FaqItem
        question="¿Cómo verifican a los choferes?"
        answer="Cada conductor pasa por verificación de cédula, licencia de conducir — de moto o de carro, según el vehículo —, antecedentes penales y revisión del vehículo. Solo los aprobados manejan en Llegateapp."
      />
      <FaqItem
        question="¿Qué pasa si tengo una emergencia durante el viaje?"
        answer="La app tiene un botón de pánico que alerta a soporte y a tus contactos de emergencia. Además puedes compartir tu ruta en vivo con familia para que vean dónde estás."
      />
      <FaqItem
        question="¿Cómo se hace el pago?"
        answer="Le pagas directamente al chofer vía Pago Móvil al llegar. Llegateapp te conecta — el cobro es entre tú y él, simple y sin vuelto."
      />
      <FaqItem
        question="Soy mototaxista o taxista, ¿cómo me uno?"
        answer="Descarga la app y regístrate como conductor, con tu moto o con tu carro. Te contactamos para verificar tus documentos y comenzar a recibir viajes."
      />
      <FaqItem
        question="¿Llegateapp llega a otras ciudades?"
        answer="Empezamos en Venezuela, pero el plan es expandirnos a más ciudades de Venezuela pronto."
      />
    </div>
  );
};