/**
 * @author Manuel Sanchez Web <manuelsanweb@gmail.com>ß
 * @title Index Creator
 * @description Create an index based on the number of elements in the input array.
 * Example:
 * ```
 * createIndex("#index", "h2");
 * ```
 * @param container - The place where we will put the index.
 * @param elem - The selector of the element.
 */
export function createIndex(container, elem) {
  const index = document.querySelector(container);
  const elements = document.querySelectorAll(elem);

  elements.forEach((element, i) => {
    // Asegurar que el elemento tenga un atributo 'id'
    if (!element.id) {
      element.id = `section-${i + 1}`;
    }

    const anchor = document.createElement("a");
    anchor.setAttribute("href", `#${element.id}`);
    anchor.textContent = `${i + 1}. ${element.textContent}`;
    index.appendChild(anchor);
  });
}
