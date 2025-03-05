import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_CA2gin8t.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bsc6xdf5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/","cacheDir":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/node_modules/.astro/","outDir":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/dist/","srcDir":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/src/","publicDir":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/public/","buildClientDir":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/dist/client/","buildServerDir":"file:///C:/Users/Sonia%20Loredo/proyecto-koplik/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/questions","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/questions\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"questions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/questions.ts","pathname":"/api/questions","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_category_.BSo3Ul8L.css"}],"routeData":{"route":"/category/[category]","isIndex":false,"type":"page","pattern":"^\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"category","dynamic":true,"spread":false}]],"params":["category"],"component":"src/pages/category/[category].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_category_.BSo3Ul8L.css"},{"type":"inline","content":"h4[data-astro-cid-dfbuvn4c],h3[data-astro-cid-qroc6eqr]{font-family:Onest Variable,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}#Letras[data-astro-cid-q55moquz]{font-family:Rubik Mono One}#welcomeMessage[data-astro-cid-q55moquz],p[data-astro-cid-q55moquz]{font-family:Onest Variable,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}#app[data-astro-cid-q55moquz]{display:grid;grid-template-areas:\"aside main main\" \"player player player\";grid-template-columns:350px 1fr;grid-template-rows:1fr auto}\n"}],"routeData":{"route":"/temas","isIndex":false,"type":"page","pattern":"^\\/temas\\/?$","segments":[[{"content":"temas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/temas.astro","pathname":"/temas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_category_.BSo3Ul8L.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Sonia Loredo/proyecto-koplik/src/pages/category/[category].astro",{"propagation":"none","containsHead":true}],["C:/Users/Sonia Loredo/proyecto-koplik/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Sonia Loredo/proyecto-koplik/src/pages/temas.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/questions@_@ts":"pages/api/questions.astro.mjs","\u0000@astro-page:src/pages/category/[category]@_@astro":"pages/category/_category_.astro.mjs","\u0000@astro-page:src/pages/temas@_@astro":"pages/temas.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C_CsopPA.mjs","C:/Users/Sonia Loredo/proyecto-koplik/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_c9KasWmt.mjs","C:/Users/Sonia Loredo/proyecto-koplik/src/islands/Quiz":"_astro/Quiz.B65Uc3Wm.js","C:/Users/Sonia Loredo/proyecto-koplik/src/islands/LoginPage":"_astro/LoginPage.CYDRdPgZ.js","@astrojs/react/client.js":"_astro/client.BO3Rm8ny.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/rubik-mono-one-cyrillic-400-normal.BOcI7D0U.woff2","/_astro/rubik-mono-one-latin-400-normal.CNmoPlom.woff2","/_astro/rubik-mono-one-latin-ext-400-normal.BsiHVyE2.woff2","/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/rubik-mono-one-latin-400-normal.B1Gf3ixn.woff","/_astro/rubik-mono-one-cyrillic-400-normal.DJOtYBN1.woff","/_astro/rubik-mono-one-latin-ext-400-normal.plJcw_cN.woff","/_astro/_category_.BSo3Ul8L.css","/favicon.svg","/projects/Anatomia.jpg","/projects/Doctor.webp","/projects/Fisiologia.jpg","/projects/Histologia.jpg","/projects/Logo.png","/_astro/client.BO3Rm8ny.js","/_astro/index.Dy6lLLXr.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/LoginPage.CYDRdPgZ.js","/_astro/Quiz.B65Uc3Wm.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tmEYBxJfUZa3piniiHF6c+Bfn8cXvmQG0bvh5mJR2qk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
