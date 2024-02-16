const link = [...document.querySelectorAll(".menu-item")];
const line = document.createElement("div");
link.forEach((item) => {
  item.addEventListener("mouseenter", handleHoverLink);
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height}px`;
  }
});

const menu = document.querySelector(".menu");
menu.addEventListener("mouseleave", (e) => {
  line.style.width = 0;
});
