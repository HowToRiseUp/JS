//https://picsum.photos/v2/list
const images = document.querySelector(".images");
async function Api() {
  const respont = await fetch("https://picsum.photos/v2/list");
  const data = await respont.json();
  return data;
}
function template(url) {
  const tmpl = `<div class="image-item">
    <img src="${url}" alt="" />
  </div>`;
  images.insertAdjacentHTML("beforeend", tmpl);
}
async function addAllImg() {
  const data = await Api();
  data.forEach((item) => {
    template(item.download_url);
  });
}
addAllImg();
