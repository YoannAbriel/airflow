'use client';
import { createAnatomy } from '@zag-js/anatomy';

const swapAnatomy = createAnatomy("swap", ["root", "indicator"]);
const parts = swapAnatomy.build();

export { parts, swapAnatomy };
