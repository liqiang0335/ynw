import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";
const viz = new Viz({ Module, render });
/**
 * ----------------------------------------
 * Render a dot graph to SVG
 * @param {string} digraph - dot graph
 * @returns {string} - SVG
 * ----------------------------------------
 */
export function renderSVGElement(digraph) {
  return viz.renderSVGElement(digraph);
}

export default viz;
