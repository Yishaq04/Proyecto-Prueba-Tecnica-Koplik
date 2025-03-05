import { jsx } from 'react/jsx-runtime';
import 'react';

const Header = () => {
  return /* @__PURE__ */ jsx("header", { className: "flex justify-center bg-[#096495] items-center py-6 w-full", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-row gap-x-10", children: /* @__PURE__ */ jsx("img", { src: "/projects/Logo.png", alt: "Logo", className: "w-50 h-auto" }) }) });
};

export { Header as H };
