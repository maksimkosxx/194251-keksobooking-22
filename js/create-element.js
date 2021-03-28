
const createElement = (element, content) => {
  if (element.textContent.length) {
    element.textContent = content
  } else
    element.remove();
}
export default  createElement;
