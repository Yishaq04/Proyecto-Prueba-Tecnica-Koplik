import { e as createComponent, f as createAstro, i as renderComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CA2gin8t.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CphWLWjA.mjs';
import { H as Header } from '../chunks/Header_BA50G-vu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Inicio de Sesión</title> ` })} ${renderComponent($$result, "Header", Header, {})} <!-- Inserta el encabezado de la página --> <!--fondo decorativo  --> ${maybeRenderHead()}<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> <div class=" mt-25 flex items-center justify-center"> <div class="bg-white p-8 rounded-2xl shadow-lg w-96"> <h1 class="text-xl font-bold mb-4 text-center">Inicio de Sesión</h1> <!-- Se renderiza el componente LoginPage que contiene el formulario de inicio de sesión en React --> ${renderComponent($$result, "LoginPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Sonia Loredo/proyecto-koplik/src/islands/LoginPage", "client:component-export": "default" })} </div> </div> `;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/pages/index.astro", void 0);

const $$file = "C:/Users/Sonia Loredo/proyecto-koplik/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
