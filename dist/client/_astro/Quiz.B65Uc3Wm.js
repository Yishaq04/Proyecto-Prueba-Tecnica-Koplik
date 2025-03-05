import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.Dy6lLLXr.js";const o=({label:c,onClick:l})=>e.jsx("button",{onClick:l,className:"p-4 border-2 rounded-md border-white bg-blue-300 transition-all duration-300 hover:bg-[#096495] hover:text-white",children:c}),m=()=>e.jsx("header",{className:"flex justify-center bg-[#096495] items-center py-6 w-full",children:e.jsx("nav",{className:"flex flex-row gap-x-10",children:e.jsx("img",{src:"/projects/Logo.png",alt:"Logo",className:"w-50 h-auto"})})}),z=({category:c})=>{const[l,p]=r.useState([]),[n,d]=r.useState(0),[b,i]=r.useState(null),[a,x]=r.useState([]),[j,g]=r.useState(!1),[w,N]=r.useState(!0);if(r.useEffect(()=>{(async()=>{try{const f=(await(await fetch("/api/questions")).json()).questions.find(Q=>Q.category===c)?.questions||[];p(f),x(new Array(f.length).fill({selected:"",correct:""})),N(!1)}catch(t){console.log(t)}})()},[c]),w)return e.jsx("p",{className:"text-center text-lg mt-10",children:"Cargando preguntas..."});if(l.length===0)return e.jsx("p",{className:"text-center text-lg mt-10",children:"No hay preguntas disponibles para esta categoría."});const v=s=>{const t=[...a];t[n]={selected:s,correct:l[n].answer},x(t),i(s)},_=()=>{n<l.length-1?(d(s=>s+1),i(a[n+1]?.selected||null)):g(!0)},y=()=>{n>0&&(d(s=>s-1),i(a[n-1]?.selected||null))};if(j){const s=a.filter(t=>t.selected===t.correct).length;return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-6",children:[e.jsx("div",{className:"absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Resultados"}),e.jsxs("p",{className:"text-lg",children:["Puntuación: ",s," / ",l.length]}),e.jsx("div",{className:"mt-6 text-left",children:a.map((t,h)=>e.jsxs("div",{className:"mb-4 p-3 border rounded-lg",children:[e.jsx("p",{className:"font-semibold",children:l[h].question}),e.jsxs("p",{className:`mt-1 ${t.selected===t.correct?"text-green-500":"text-red-500"}`,children:["Tu respuesta: ",t.selected]}),t.selected!==t.correct&&e.jsxs("p",{className:"text-blue-500",children:["Respuesta correcta: ",t.correct]})]},h))}),e.jsx(o,{label:"Reiniciar",onClick:()=>{d(0),g(!1),i(null),x(new Array(l.length).fill({selected:"",correct:""}))}}),e.jsx(o,{label:"Ir al inicio",onClick:()=>{window.location.href="/temas"}})]})]})]})}const u=l[n];return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsxs("div",{className:"flex flex-col items-center justify-center   p-6",children:[e.jsx("div",{className:"absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6",children:u.question}),e.jsx("div",{className:"grid grid-cols-1 gap-4",children:u.options.map((s,t)=>e.jsx("button",{className:`p-3 rounded-lg border transition-all text-lg ${b===s?s===u.answer?"bg-green-500 text-white":"bg-red-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,onClick:()=>v(s),children:s},t))}),e.jsxs("div",{className:"flex justify-between mt-6",children:[e.jsx(o,{label:"Anterior",onClick:y,disabled:n===0}),e.jsx(o,{label:"Siguiente",onClick:_})]})]})]})]})};export{z as default};
