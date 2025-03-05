export { renderers } from '../../renderers.mjs';

const GET = () => {
  return new Response(
    // La respuesta será un objeto JSON con una lista de preguntas por categoría
    JSON.stringify({
      questions: [
        {
          category: "Anatomia",
          questions: [
            // Categoría: Anatomía
            {
              question: "¿Cuántos huesos tiene el cuerpo humano?",
              options: ["206", "208", "210", "212"],
              answer: "206"
            },
            {
              question: "¿Cuántos músculos tiene el cuerpo humano?",
              options: ["640", "650", "660", "670"],
              answer: "640"
            }
          ]
        },
        // Categoría: Fisiología
        {
          category: "Fisiologia",
          questions: [
            {
              question: "¿Qué es la homeostasis?",
              options: [
                "La capacidad de mantener el equilibrio interno del cuerpo humano",
                "La capacidad de moverse",
                "La capacidad de crecer",
                "La capacidad de reproducirse"
              ],
              answer: "La capacidad de mantener el equilibrio interno del cuerpo humano"
            },
            {
              question: "¿Qué es la termorregulación?",
              options: [
                "La capacidad de mantener la temperatura corporal",
                "La capacidad de respirar",
                "La capacidad de digerir alimentos",
                "La capacidad de bombear sangre"
              ],
              answer: "La capacidad de mantener la temperatura corporal"
            }
          ]
        },
        // Categoría: Histología
        {
          category: "Histologia",
          questions: [
            {
              question: "¿Qué es la histología?",
              options: [
                "La rama de la biología que estudia los tejidos",
                "La rama de la biología que estudia los huesos",
                "La rama de la biología que estudia los músculos",
                "La rama de la biología que estudia los órganos"
              ],
              answer: "La rama de la biología que estudia los tejidos"
            },
            {
              question: "¿Qué es un tejido?",
              options: [
                "Un conjunto de células que realizan una función específica",
                "Un conjunto de órganos que realizan una función específica",
                "Un conjunto de huesos que realizan una función específica",
                "Un conjunto de músculos que realizan una función específica"
              ],
              answer: "Un conjunto de células que realizan una función específica"
            }
          ]
        }
      ]
    })
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
