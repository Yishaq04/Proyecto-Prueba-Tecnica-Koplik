import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, i as renderComponent } from '../chunks/astro/server_CA2gin8t.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CphWLWjA.mjs';
import 'clsx';
import { H as Header } from '../chunks/Header_BA50G-vu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col  justify-center gap-2 "> <!-- Contenedor que organiza los elementos verticalmente --> <div class="flex flex-col items-center justify-center"> <!-- Imagen del perfil del usuario con borde redondeado --> <img class="rounded-full size-32 mb-4" src="/public/projects/doctor.webp" alt="Oscar photo"> <!-- Párrafo donde se mostrará el saludo con el nombre y correo del usuario --> <p id="greeting" class="text-center text-white"></p> <p class="text-center text-white">Universidad Autonoma de San Luis Potosi</p> </div> </nav>`;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/components/AsideMenu.astro", void 0);

const $$Cards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4" data-astro-cid-dfbuvn4c> <!-- tarjeta para la categoría Fisiología --> <a href="/category/Fisiologia" class="transition-all duration-300 flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-[#F2D95D] shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col text-white hover:text-black" data-astro-cid-dfbuvn4c> <picture class="aspect-square w-full overflow-hidden" data-astro-cid-dfbuvn4c> <!-- Imagen representativa de la categoría --> <img src="../public/projects/Fisiologia.jpg" alt="Fisiologia" class="object-cover w-full h-full rounded-md" data-astro-cid-dfbuvn4c> </picture> <div class="flex flex-auto flex-col truncate" data-astro-cid-dfbuvn4c> <!-- Texto con el nombre de la categoría --> <h4 class="text-sm text-center transition-all duration-200 " data-astro-cid-dfbuvn4c>
Fisiologia
</h4> </div> </a> <!-- tarjeta para la categoría Anatomia --> <a href="/category/Anatomia" class="transition-all duration-300 flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-[#F2D95D] shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col text-white hover:text-black" data-astro-cid-dfbuvn4c> <picture class="aspect-square w-full overflow-hidden" data-astro-cid-dfbuvn4c> <img src="../public/projects/Anatomia.jpg" alt="Anatomia" class="object-cover w-full h-full rounded-md" data-astro-cid-dfbuvn4c> </picture> <div class="flex flex-auto flex-col truncate" data-astro-cid-dfbuvn4c> <h4 class="text-sm text-center transition-all duration-200" data-astro-cid-dfbuvn4c>
Anatomia
</h4> </div> </a> <!-- tarjeta para la categoría Histologia --> <a href="/category/Histologia" class="transition-all duration-300 flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-[#F2D95D] shadow-lg hover:shadow-xl bg-zinc-500/30 w-44 flex-col text-white hover:text-black" data-astro-cid-dfbuvn4c> <picture class="aspect-square w-full overflow-hidden" data-astro-cid-dfbuvn4c> <img src="../public/projects/Histologia.jpg" alt="Histologia" class="object-cover w-full h-full rounded-md" data-astro-cid-dfbuvn4c> </picture> <div class="flex flex-auto flex-col truncate" data-astro-cid-dfbuvn4c> <h4 class="text-sm text-center transition-all duration-200" data-astro-cid-dfbuvn4c>
Histologia
</h4> </div> </a> </div> `;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/components/cards.astro", void 0);

const $$Astro = createAstro();
const $$Estudio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Estudio;
  return renderTemplate`<!-- Contenedor principal con bordes superior e inferior de color y altura mínima -->${maybeRenderHead()}<div${addAttribute(Astro2.props.id, "id")} class="w-full border-bulma border-t-4 border-b-4 min-h-45 relative" data-astro-cid-qroc6eqr> <!-- Contenedor que ocupa toda la anchura y centra su contenido vertical y horizontalmente --> <div class="bg-cross w-full md:border-x-4 flex flex-col justify-center items-center" data-astro-cid-qroc6eqr> <!-- Área desplazable verticalmente con padding para pantallas medianas --> <div class="overflow-y-auto w-full" data-astro-cid-qroc6eqr> <!-- Título principal --> <h1 class="hidden md:block text-4xl text-white text-center" data-astro-cid-qroc6eqr>
Estudia A <span class="text-[#F2D95D]" data-astro-cid-qroc6eqr>Tu Manera!</span> </h1> <h3 class="hidden md:block text-2xl text-center md:mb-4" data-astro-cid-qroc6eqr>
Empieza a Estudiar y Conoce Nuestras Herramientas de Estudio
</h3> <!-- Sección para el contenido de "QUIZZ" con bordes superiores --> <div class="w-full border-t-4 hover:bg-cross py-2 flex flex-col justify-center items-center" data-astro-cid-qroc6eqr> <h1 class="text-2xl my-4 text-center text-white" data-astro-cid-qroc6eqr>
QUIZZ
</h1> <!-- Componente que contiene las tarjetas de categorías para iniciar los cuestionarios --> <div class="w-full border-t-4 hover:bg-cross py-2 flex justify-center items-center" data-astro-cid-qroc6eqr> ${renderComponent($$result, "Cards", $$Cards, { "data-astro-cid-qroc6eqr": true })} </div> </div> </div> </div> </div> `;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/components/Estudio.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Temas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-q55moquz": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-q55moquz> <!-- Barra lateral que contiene el men\xFA, encabezado y botones de navegaci\xF3n --> <aside class="[grid-area:aside] flex-col flex overflow-auto rounded-2xl items-center " data-astro-cid-q55moquz> ', " <!-- Muestra el encabezado con el logo --> ", ' <!-- Para la foto de perfil --> <!-- Boton que dirige al usuario a la secci\xF3n del quiz --> <a href="#Quiz" class="inline-flex items-center mt-14 px-4 py-2 text-sm font-medium text-gray-900 bg-white border rounded-lg hover:bg-gray-100 hover:text-yellow-400" data-astro-cid-q55moquz>\nEmpezar a Estudiar\n</a> <!-- Bot\xF3n para cerrar sesi\xF3n que redirige a la p\xE1gina de inicio --> <a href="/" class="inline-flex items-center mt-5 px-4 py-2 text-sm font-medium text-gray-900 bg-white border rounded-lg hover:bg-gray-100 hover:text-yellow-400" data-astro-cid-q55moquz>\nCerrar sesi\xF3n\n</a> </aside> <!-- Contenido principal de la p\xE1gina --> <main class="[grid-area:main] overflow-y-auto" data-astro-cid-q55moquz> <div class="mt-10 screen flex items-center justify-center" data-astro-cid-q55moquz> <div class="bg-white p-8 rounded-2xl shadow-lg w-270 text-center" data-astro-cid-q55moquz> <!-- Mensaje de bienvenida personalizado con el nombre del usuario --> <h1 id="welcomeMessage" class="text-5xl font-bold mb-4 text-black text-center" data-astro-cid-q55moquz></h1> <div class="" data-astro-cid-q55moquz> <p class="mt-4 text-3xl" data-astro-cid-q55moquz> \xBFCon que te gustaria empezar a estudiar hoy?</p> </div> </div> </div> <!-- Secci\xF3n de tipograf\xEDa estilo Koplik--> <div id="Letras" class="mx-40 my-10 h-auto flex flex-col justify-between" data-astro-cid-q55moquz> <div class="md:flex-[0.4] items-end justify-end flex" data-astro-cid-q55moquz> <h1 class="text-2xl md:text-7xl font-rubik text-white" data-astro-cid-q55moquz>MEDICINA</h1> </div> <div class="md:flex-[0.4] items-end justify-end flex" data-astro-cid-q55moquz> <h1 class="text-2xl md:text-7xl font-rubik text-white" data-astro-cid-q55moquz>\nTECNOLOGIA\n</h1> </div> <div class="md:flex-[0.4] items-start" data-astro-cid-q55moquz> <h1 class="text-2xl md:text-7xl font-rubik text-white" data-astro-cid-q55moquz>\nEDUCACION\n</h1> </div> </div> <!-- Componente que carga la secci\xF3n de preguntas --> ', ' </main> </div>  <script type="module">\n        const userName = localStorage.getItem("name");\n        const userEmail = localStorage.getItem("email");\n      \n        if (userName && userEmail) {\n          document.getElementById("greeting").innerHTML =\n            `<strong>${userName}</strong><br><strong>${userEmail}</strong>`;\n      \n          // Mensaje de bienvenida personalizado\n          document.getElementById("welcomeMessage").innerHTML =\n            `\xA1Hola, <strong>${userName}</strong>! Nos da gusto verte nuevamente`;\n        }\n      <\/script>  '], ["  ", '<div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-q55moquz> <!-- Barra lateral que contiene el men\xFA, encabezado y botones de navegaci\xF3n --> <aside class="[grid-area:aside] flex-col flex overflow-auto rounded-2xl items-center " data-astro-cid-q55moquz> ', " <!-- Muestra el encabezado con el logo --> ", ' <!-- Para la foto de perfil --> <!-- Boton que dirige al usuario a la secci\xF3n del quiz --> <a href="#Quiz" class="inline-flex items-center mt-14 px-4 py-2 text-sm font-medium text-gray-900 bg-white border rounded-lg hover:bg-gray-100 hover:text-yellow-400" data-astro-cid-q55moquz>\nEmpezar a Estudiar\n</a> <!-- Bot\xF3n para cerrar sesi\xF3n que redirige a la p\xE1gina de inicio --> <a href="/" class="inline-flex items-center mt-5 px-4 py-2 text-sm font-medium text-gray-900 bg-white border rounded-lg hover:bg-gray-100 hover:text-yellow-400" data-astro-cid-q55moquz>\nCerrar sesi\xF3n\n</a> </aside> <!-- Contenido principal de la p\xE1gina --> <main class="[grid-area:main] overflow-y-auto" data-astro-cid-q55moquz> <div class="mt-10 screen flex items-center justify-center" data-astro-cid-q55moquz> <div class="bg-white p-8 rounded-2xl shadow-lg w-270 text-center" data-astro-cid-q55moquz> <!-- Mensaje de bienvenida personalizado con el nombre del usuario --> <h1 id="welcomeMessage" class="text-5xl font-bold mb-4 text-black text-center" data-astro-cid-q55moquz></h1> <div class="" data-astro-cid-q55moquz> <p class="mt-4 text-3xl" data-astro-cid-q55moquz> \xBFCon que te gustaria empezar a estudiar hoy?</p> </div> </div> </div> <!-- Secci\xF3n de tipograf\xEDa estilo Koplik--> <div id="Letras" class="mx-40 my-10 h-auto flex flex-col justify-between" data-astro-cid-q55moquz> <div class="md:flex-[0.4] items-end justify-end flex" data-astro-cid-q55moquz> <h1 class="text-2xl md:text-7xl font-rubik text-white" data-astro-cid-q55moquz>MEDICINA</h1> </div> <div class="md:flex-[0.4] items-end justify-end flex" data-astro-cid-q55moquz> <h1 class="text-2xl md:text-7xl font-rubik text-white" data-astro-cid-q55moquz>\nTECNOLOGIA\n</h1> </div> <div class="md:flex-[0.4] items-start" data-astro-cid-q55moquz> <h1 class="text-2xl md:text-7xl font-rubik text-white" data-astro-cid-q55moquz>\nEDUCACION\n</h1> </div> </div> <!-- Componente que carga la secci\xF3n de preguntas --> ', ' </main> </div>  <script type="module">\n        const userName = localStorage.getItem("name");\n        const userEmail = localStorage.getItem("email");\n      \n        if (userName && userEmail) {\n          document.getElementById("greeting").innerHTML =\n            \\`<strong>\\${userName}</strong><br><strong>\\${userEmail}</strong>\\`;\n      \n          // Mensaje de bienvenida personalizado\n          document.getElementById("welcomeMessage").innerHTML =\n            \\`\xA1Hola, <strong>\\${userName}</strong>! Nos da gusto verte nuevamente\\`;\n        }\n      <\/script>  '])), maybeRenderHead(), renderComponent($$result2, "Header", Header, { "data-astro-cid-q55moquz": true }), renderComponent($$result2, "AsideMenu", $$AsideMenu, { "data-astro-cid-q55moquz": true }), renderComponent($$result2, "Estudio", $$Estudio, { "id": "Quiz", "data-astro-cid-q55moquz": true })) })} `;
}, "C:/Users/Sonia Loredo/proyecto-koplik/src/pages/temas.astro", void 0);

const $$file = "C:/Users/Sonia Loredo/proyecto-koplik/src/pages/temas.astro";
const $$url = "/temas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Temas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
