const accordianHeader = document.querySelectorAll(".accordian-header");

[...accordianHeader].forEach((item) => {
  item.addEventListener("click", HandleClick);
});
function HandleClick(event) {
  console.log(event.target.nextElementSibling);
  console.log(event.target.nextElementSibling.scrollHeight);
  event.target.nextElementSibling.classList.toggle("is-active");
}
