import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CA2gin8t.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CphWLWjA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category = "" } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": category }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Quiz", null, { "category": category, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Sonia Loredo/proyecto-koplik/src/islands/Quiz", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/pages/category/[category].astro", void 0);

const $$file = "C:/Users/Sonia Loredo/proyecto-koplik/src/pages/category/[category].astro";
const $$url = "/category/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
