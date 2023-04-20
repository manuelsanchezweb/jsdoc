/**
 * Create a simple pie chart creator using the conic background with the data.
 *
 * @module
 */

/**
 * @author Manuel Sanchez Web <manuelsanweb@gmail.com>
 * @title Pie Chart Creator
 * @description The element should give us data about the color, percentage and message to display via data-attributes.
 * Example:
 * ```html
 * <div class="chart" id="chart-football" data-color="blue"  data-percentage="30" data-message="Amantes del fútbol: 30%"></div>
 * <script>createPieChart("#chart-footbal");</script>
 * ```
 * @param elem - The selector of the element.
 */
export function createPieChart(elem) {
  const element = document.querySelector(elem);
  if (!element) return;
  const data = element.dataset;
  const { color, percentage, message } = data;

  const namedColorToHex = (color) => {
    const tempElement = document.createElement("div");
    tempElement.style.color = color;
    document.body.appendChild(tempElement);
    const hexColor = getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement);
    return hexColor;
  };

  function displayMessage(element, message) {
    const messageElement = document.createElement("span");
    messageElement.innerText = message || "No message";
    messageElement.style.marginTop = "5px";
    element.appendChild(messageElement);
  }

  const hexToRgbA = (color) => {
    let hex;
    if (color.startsWith("#")) {
      hex = color;
    } else {
      const rgbColor = namedColorToHex(color);
      hex = rgbColor.replace(
        /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/g,
        (orig, r, g, b) =>
          "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)
      );
    }

    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return {
        r: (c >> 16) & 255,
        g: (c >> 8) & 255,
        b: c & 255,
      };
    }
    throw new Error("Bad Color");
  };

  const rgba = hexToRgbA(color);
  const rgbaFullOpacity = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`;
  const rgbaTransparentColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0.5)`;

  element.title = message;
  element.style.background = `conic-gradient(${rgbaFullOpacity} 0% ${percentage}%, ${rgbaTransparentColor} ${percentage}% 100%)`;

  displayMessage(element, message);
}
