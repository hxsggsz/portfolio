import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_akvBs9Hf.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D94vSpEH.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/hxsggsz/workspace/portfolio/","cacheDir":"file:///home/hxsggsz/workspace/portfolio/node_modules/.astro/","outDir":"file:///home/hxsggsz/workspace/portfolio/dist/","srcDir":"file:///home/hxsggsz/workspace/portfolio/src/","publicDir":"file:///home/hxsggsz/workspace/portfolio/public/","buildClientDir":"file:///home/hxsggsz/workspace/portfolio/dist/client/","buildServerDir":"file:///home/hxsggsz/workspace/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"en-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/en-us","isIndex":true,"type":"page","pattern":"^\\/en-us\\/?$","segments":[[{"content":"en-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en-us/index.astro","pathname":"/en-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"pt-br/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pt-br","isIndex":true,"type":"page","pattern":"^\\/pt-br\\/?$","segments":[[{"content":"pt-br","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pt-br/index.astro","pathname":"/pt-br","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BKG3l99Z.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/hxsggsz/workspace/portfolio/src/pages/en-us/index.astro",{"propagation":"none","containsHead":true}],["/home/hxsggsz/workspace/portfolio/src/pages/pt-br/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/en-us/index@_@astro":"pages/en-us.astro.mjs","\u0000@astro-page:src/pages/pt-br/index@_@astro":"pages/pt-br.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/hxsggsz/workspace/portfolio/node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_AceMWjBA.mjs","\u0000@astrojs-manifest":"manifest_bbz8SJMD.mjs","@/components/desktop/components/lockScreen":"_astro/lockScreen.CehG_KBV.js","@/components/desktop":"_astro/desktop.BYuZ4ie3.js","@astrojs/react/client.js":"_astro/client.BwXLTOQz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BKG3l99Z.css","/_astro/index.DGFuzCzJ.css","/about.txt","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/metatag-photo.png","/site.webmanifest","/_astro/client.BwXLTOQz.js","/_astro/cn.C9VOVy3F.js","/_astro/config.C5LiMjv5.png","/_astro/desktop.BYuZ4ie3.js","/_astro/discord.A_x1NVra.png","/_astro/files.B8uFR1gj.png","/_astro/folders.CvmbPJnn.png","/_astro/github.DkTr3Tul.png","/_astro/index.D9sPYOG3.js","/_astro/index.DdHQw2y0.js","/_astro/linkedin.Du0x1Vpa.svg","/_astro/lockScreen.CehG_KBV.js","/_astro/wallpapper-dark.DaLXg2_6.png","/_astro/wallpapper-light.DMop1Hdc.png","/en-us/index.html","/pt-br/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always-no-redirect","locales":["pt-br","en-us"],"defaultLocale":"en-us","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"awpJFBL8mes6YTke74XfzIcLkCN62wJWzY24Bj+gBUk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
