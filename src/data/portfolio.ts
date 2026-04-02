/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck — consultas `?w=…&as=img` de vite-imagetools no tienen tipos estables en TS
/**
 * Fotografías bajo `src/assets/images/`: Vite empaqueta + vite-imagetools genera WebP y srcset en grid.
 * Hero: ajusta `heroGrid` si colocas otra imagen principal en `src/assets/images/hero/`.
 */
import type { ResponsiveImgMeta } from "../components/ResponsiveImage";

import heroGrid from "../assets/images/proyectos/sonia-chapelet-retrato-mujer-joven-rubia.jpg?w=960;1280;1600&format=webp&quality=88&as=img";

import r1g from "../assets/images/retratos/sonia-chapelet-fotografia-bebe-siesta-bajo-un-arbol.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import r3g from "../assets/images/retratos/sonia-chapelet-madre-de-espaldas-con-bebe.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import r4g from "../assets/images/retratos/sonia-chapelet-retrato-madre-amamantando.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import t1g from "../assets/images/trabajo/sonia-chapelet-madre-sentada-con-pie-en-silla-amamantando.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import p1g from "../assets/images/proyectos/sonia-chapelet-retrato-mujer-joven-rubia.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import p2g from "../assets/images/proyectos/sonia-chapelet-retrato-mujer-morena-delante-de-un-faro-en-alicante.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import p3g from "../assets/images/proyectos/sonia-chapelet-retrato-perfil-mujer-joven-rubia-con-sol-en-la-cara.jpg?w=640;960;1280&format=webp&quality=85&as=img";
import p4g from "../assets/images/proyectos/sonia-chapelet-retrato-de-mujer-rubia-con-abrigo-simil-piel.jpg?w=640;960;1280&format=webp&quality=85&as=img";

import r1l from "../assets/images/retratos/sonia-chapelet-fotografia-bebe-siesta-bajo-un-arbol.jpg?w=1920&format=webp&quality=90";
import r3l from "../assets/images/retratos/sonia-chapelet-madre-de-espaldas-con-bebe.jpg?w=1920&format=webp&quality=90";
import r4l from "../assets/images/retratos/sonia-chapelet-retrato-madre-amamantando.jpg?w=1920&format=webp&quality=90";
import t1l from "../assets/images/trabajo/sonia-chapelet-madre-sentada-con-pie-en-silla-amamantando.jpg?w=1920&format=webp&quality=90";
import p1l from "../assets/images/proyectos/sonia-chapelet-retrato-mujer-joven-rubia.jpg?w=1920&format=webp&quality=90";
import p2l from "../assets/images/proyectos/sonia-chapelet-retrato-mujer-morena-delante-de-un-faro-en-alicante.jpg?w=1920&format=webp&quality=90";
import p3l from "../assets/images/proyectos/sonia-chapelet-retrato-perfil-mujer-joven-rubia-con-sol-en-la-cara.jpg?w=1920&format=webp&quality=90";
import p4l from "../assets/images/proyectos/sonia-chapelet-retrato-de-mujer-rubia-con-abrigo-simil-piel.jpg?w=1920&format=webp&quality=90";

export type PortfolioItem = {
  grid: ResponsiveImgMeta;
  lightbox: string;
  alt: string;
};

export const heroImage: ResponsiveImgMeta = heroGrid;

export const retratos: PortfolioItem[] = [
  { grid: r1g, lightbox: r1l, alt: "Bebé durmiendo bajo un árbol con luz natural suave" },
  { grid: r3g, lightbox: r3l, alt: "Madre de espaldas con su bebé en brazos en un retrato íntimo" },
  { grid: r4g, lightbox: r4l, alt: "Madre amamantando a su bebé con luz natural, fotografía de maternidad" },
];

export const trabajo: PortfolioItem[] = [
  { grid: t1g, lightbox: t1l, alt: "Madre amamantando sentada en interior con luz lateral suave" },
];

export const proyectos: PortfolioItem[] = [
  { grid: p1g, lightbox: p1l, alt: "Retrato de mujer joven rubia con luz natural, fotografía autoral" },
  { grid: p2g, lightbox: p2l, alt: "Retrato de mujer frente a un faro en Alicante, fotografía artística en exterior" },
  { grid: p3g, lightbox: p3l, alt: "Retrato de perfil de mujer joven con luz de sol en el rostro, fotografía autoral" },
  { grid: p4g, lightbox: p4l, alt: "Retrato de mujer rubia con abrigo simil piel, fotografía editorial con luz cálida" },
];
