const images = document.querySelectorAll(".item-img img");

images.forEach((item) => {
  item.addEventListener("click", handleZoomImg);
});

function handleZoomImg(event) {
  const images = event.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="light-content">
   <i class="fa fa-angle-left prev" aria-hidden="true"></i>
    <img
      src="${images}"
      alt=""
    />
    <i class="fa fa-angle-right next" aria-hidden="true"></i>

  </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}

document.body.addEventListener("click", (e) => {
  const itemImg = document.querySelectorAll(".item-img img");
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".next")) {
    const lightImg = document.querySelector(".light-content img");
    let index = [...itemImg].findIndex(
      (item) => item.getAttribute("src") == lightImg.getAttribute("src")
    );

    if ([...itemImg].indexOf([...itemImg][index + 1]) == -1) {
      index = -1;
    }

    const newImg = [...itemImg][index + 1].getAttribute("src");

    lightImg.setAttribute("src", newImg);
  } else if (e.target.matches(".prev")) {
    const lightImg = document.querySelector(".light-content img");
    let index = [...itemImg].findIndex(
      (item) => item.getAttribute("src") == lightImg.getAttribute("src")
    );
    if ([...itemImg].indexOf([...itemImg][index + 1]) == 1) {
      index = [...itemImg].length;
    }

    const newImg = [...itemImg][index - 1].getAttribute("src");

    lightImg.setAttribute("src", newImg);
  }
});
