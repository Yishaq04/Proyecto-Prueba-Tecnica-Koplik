import { e as createComponent, f as createAstro, h as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate } from './astro/server_CA2gin8t.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>App Preguntas</title>${renderHead()}</head> <body> <!-- <Header/> --> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
