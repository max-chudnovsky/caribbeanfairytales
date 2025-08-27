globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/@astrojs_DBFm3Dp3.mjs';
import { c as createComponent, a as createAstro, e as addAttribute, f as renderHead, g as renderSlot, h as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../chunks/astro_DOplfWg6.mjs';
export { r as renderers } from '../chunks/astro_DOplfWg6.mjs';
import '../chunks/kleur_BzupFrY7.mjs';
/* empty css                                 */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Discover the magic of the Dominican Republic with Caribbean Fairy Tale tours" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/max/caribbeanfairytales/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white py-2"> <div class="container mx-auto px-4"> <div class="flex justify-between items-center"> <!-- Left side - Caribbean Fairy Tale logo --> <div class="flex items-center space-x-3"> <div class="text-4xl">🌴</div> <div class="flex flex-col leading-tight"> <span class="text-xl font-black text-black tracking-wider">CARIBBEAN</span> <span class="text-base font-medium text-orange-600 italic -mt-1">Fairy Tale</span> </div> </div> <!-- Right side - Navigation in orange boxes --> <nav class="flex space-x-1"> <a href="/tours" class="bg-orange-500 text-white font-bold px-4 py-2 text-sm tracking-wide hover:bg-orange-600 transition-colors">TOURS</a> <a href="/blog" class="bg-orange-500 text-white font-bold px-4 py-2 text-sm tracking-wide hover:bg-orange-600 transition-colors">BLOG</a> <a href="/about" class="bg-orange-500 text-white font-bold px-4 py-2 text-sm tracking-wide hover:bg-orange-600 transition-colors">ABOUT US</a> <a href="/contact" class="bg-orange-500 text-white font-bold px-4 py-2 text-sm tracking-wide hover:bg-orange-600 transition-colors">CONTACT</a> </nav> </div> </div> </header>`;
}, "/home/max/caribbeanfairytales/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-cyan-400 py-20 overflow-hidden"> <!-- Hot Deals Badge --> <div class="absolute top-4 right-8 bg-orange-500 text-white px-4 py-2 font-bold text-sm transform rotate-12">
HOT DEALS!
</div> <div class="container mx-auto px-4 text-center"> <h1 class="text-white font-black leading-none"> <div class="text-7xl md:text-8xl lg:text-9xl tracking-widest mb-4">
DOMINICAN REPUBLIC
</div> <div class="text-7xl md:text-8xl lg:text-9xl tracking-widest">
TOURS
</div> </h1> </div> </section>`;
}, "/home/max/caribbeanfairytales/src/components/Hero.astro", void 0);

const $$FeaturedGallery = createComponent(($$result, $$props, $$slots) => {
  const featuredImages = [
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beach Adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cultural Tour"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mountain Hiking"
    },
    {
      src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Water Activities"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-cyan-400"> <div class="grid grid-cols-4 gap-0"> ${featuredImages.map((image) => renderTemplate`<div class="aspect-square overflow-hidden"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover hover:opacity-90 transition-opacity"> </div>`)} </div> </section>`;
}, "/home/max/caribbeanfairytales/src/components/FeaturedGallery.astro", void 0);

const $$Astro = createAstro();
const $$DestinationSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DestinationSection;
  const { title, isBlue = false } = Astro2.props;
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Photographer at work"
    },
    {
      src: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Photography session"
    },
    {
      src: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional photographer"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 ${isBlue ? "bg-cyan-400" : "bg-white"}`, "class")}> <div class="container mx-auto px-4"> <h2${addAttribute(`text-4xl font-black mb-12 tracking-wider ${isBlue ? "text-white" : "text-black"}`, "class")}> ${title} </h2> <div class="grid grid-cols-3 gap-8"> ${galleryImages.map((image, _) => renderTemplate`<div class="aspect-[4/5] overflow-hidden"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover hover:opacity-90 transition-opacity"> </div>`)} </div> </div> </section>`;
}, "/home/max/caribbeanfairytales/src/components/DestinationSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Caribbean Fairy Tale - Dominican Republic Tours" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "FeaturedGallery", $$FeaturedGallery, {})} ${renderComponent($$result2, "DestinationSection", $$DestinationSection, { "title": "DESTINATION 1" })} ${renderComponent($$result2, "DestinationSection", $$DestinationSection, { "title": "DESTINATION 2", "isBlue": true })} ` })}`;
}, "/home/max/caribbeanfairytales/src/pages/index.astro", void 0);

const $$file = "/home/max/caribbeanfairytales/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
