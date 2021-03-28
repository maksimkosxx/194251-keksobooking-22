
const createElement = (element, content) => {
  if (element.textContent.length) {
    return element.textContent = content
  } else
    return element.remove();
}
export default  createElement;
