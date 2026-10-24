import { TeamMemberCard } from "@/sections/TeamSection/components/TeamMemberCard";

export const TeamCards = () => {
  return (
    <ol
      aria-label="Integrantes del equipo de Flashy"
      className="box-border caret-transparent gap-x-4 grid grid-cols-[1fr] list-none outline-[3px] gap-y-4 no-underline pl-0 md:grid-cols-[repeat(4,minmax(0px,1fr))]"
    >
      <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <TeamMemberCard
          profileHref="/equipo#alexander-gracia"
          profileAriaLabel="Ver perfil de Alexander Gracia, CEO de Flashy"
          imageUrl="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/avatar-generic.svg"
          imageAlt="Alexander Gracia, CEO de Flashy"
          imageTitle="Alexander Gracia, CEO de Flashy"
          memberNumber="01"
          roleAbbreviation="CEO"
          founderLabel="FUNDADOR"
          memberName="Alexander Gracia"
          roleTitle="CEO · Chief Executive Officer"
          companyName="Flashy"
          description="Lidera la visión y la estrategia de Flashy. Define hacia dónde va la empresa, coordina al equipo fundador y representa a Flashy ante aliados, inversionistas y la comunidad de Venezuela."
        />
      </li>
      <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <TeamMemberCard
          profileHref="/equipo#jose-parra"
          profileAriaLabel="Ver perfil de Jose Parra, CTO de Flashy"
          imageUrl="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/avatar-generic.svg"
          imageAlt="Jose Parra, CTO de Flashy"
          imageTitle="Jose Parra, CTO de Flashy"
          memberNumber="02"
          roleAbbreviation="CTO"
          founderLabel="FUNDADOR"
          memberName="Jose Parra"
          roleTitle="CTO · Chief Technology Officer"
          companyName="Flashy"
          description="Responsable de toda la tecnología de Flashy: la app de pasajeros y conductores, la plataforma en tiempo real, la infraestructura y la seguridad de los datos. Convierte la visión en producto."
        />
      </li>
      <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <TeamMemberCard
          profileHref="/equipo#danny-barroso"
          profileAriaLabel="Ver perfil de Danny Barroso, CMO de Flashy"
          imageUrl="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/avatar-generic.svg"
          imageAlt="Danny Barroso, CMO de Flashy"
          imageTitle="Danny Barroso, CMO de Flashy"
          memberNumber="03"
          roleAbbreviation="CMO"
          founderLabel="FUNDADOR"
          memberName="Danny Barroso"
          roleTitle="CMO · Chief Marketing Officer"
          companyName="Flashy"
          description="Dirige el marketing y la marca de Flashy. Se encarga del crecimiento de usuarios, las campañas, las redes sociales y las alianzas comerciales que llevan la app a más personas y negocios."
        />
      </li>
      <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <TeamMemberCard
          profileHref="/equipo#gabriel-davila"
          profileAriaLabel="Ver perfil de Gabriel Davila, COO de Flashy"
          imageUrl="https://c.animaapp.com/lXaZZWUN0icVGNVaoQwsaA/assets/avatar-generic.svg"
          imageAlt="Gabriel Davila, COO de Flashy"
          imageTitle="Gabriel Davila, COO de Flashy"
          memberNumber="04"
          roleAbbreviation="COO"
          founderLabel="FUNDADOR"
          memberName="Gabriel Davila"
          roleTitle="COO · Chief Operating Officer"
          companyName="Flashy"
          description="Está a cargo de las operaciones diarias: la red de conductores, la verificación y el soporte, la calidad del servicio y la expansión de Flashy a nuevas zonas y ciudades."
        />
      </li>
    </ol>
  );
};