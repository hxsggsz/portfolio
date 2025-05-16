import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CG4hv2sU.mjs';
import { manifest } from './manifest_bbz8SJMD.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en-us.astro.mjs');
const _page2 = () => import('./pages/pt-br.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en-us/index.astro", _page1],
    ["src/pages/pt-br/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c1f40084-421d-47d9-84c3-d56931b9440a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
