const fs = require('fs');
const p = 'src/secciones/barra de navegacion/componentes/NavbarActions.tsx';
let c = fs.readFileSync(p, 'utf8');
// Add import at top
c = "import { useDataSaver } from \"@/context/DataSaverContext\";\nimport { Leaf } from \"lucide-react\";\n" + c;
// Insert toggle inside the outer div, before the first inner div
const toggle = `      <button
        onClick={useDataSaver().toggleDataSaver}
        className="flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors"
        aria-label="Modo Ahorro"
      >
        <Leaf className="w-4 h-4" />
        <span>Modo Ahorro</span>
      </button>
`;
c = c.replace("  return (\n    <div className=\"items-center", "  return (\n    <div className=\"items-center");
// We'll insert toggle as first child of outer div
c = c.replace("<div className=\"items-center box-border caret-transparent gap-x-3 flex", `<div className=\"items-center box-border caret-transparent gap-x-3 flex`);
// Insert toggle after opening outer div tag
c = c.replace("no-underline\">\n      <div className=\"items-center box-border caret-transparent gap-x-2.5", "no-underline\">\n" + toggle + "      <div className=\"items-center box-border caret-transparent gap-x-2.5");
fs.writeFileSync(p, c, "utf8");
console.log("done");
