/* empty css                                 */
import { c as createComponent, b as createAstro } from '../chunks/astro/server_akvBs9Hf.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect(`/${Astro2.preferredLocale ?? "en"}/`, 307);
}, "/home/hxsggsz/workspace/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/hxsggsz/workspace/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
