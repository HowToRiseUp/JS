const btnClick = document.querySelector(".btn");
const template = `<div class="modal">
<div class="modal-overlay"></div>
<div class="modal-content">
  <span class="modal-close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </span>
  <div class="modal-main">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
    maiores eligendi deleniti ipsa quae nam sunt quasi nisi, dignissimos
    eaque aliquam minus. Eius perferendis, voluptates totam iure minus
    consequuntur est?
  </div>
</div>
</div>`;

btnClick.addEventListener("click", () => {
  document.body.insertAdjacentHTML("beforeEnd", template);
});

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".modal-close")) {
    const model = e.target.parentNode.parentNode;
    model.parentNode.removeChild(model);
  } else if (e.target.matches(".modal-overlay")) {
    const model = e.target.parentNode;
    model.parentNode.removeChild(model);
  }
});
