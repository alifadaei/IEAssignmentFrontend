function showModal(name) {
  document.querySelector(".backdrop").classList.remove("hidden");
  if (name === "js") {
    document.querySelector(".modal_book_js").classList.remove("hidden");
  } else if (name === "react") {
    document.querySelector(".modal_book_react").classList.remove("hidden");
  } else {
    document.querySelector(".modal_book_go").classList.remove("hidden");
  }
  document.body.classList.add("overflow");
}
function closeModals() {
  document.querySelector(".backdrop").classList.add("hidden");
  document.querySelector(".modal_book_js").classList.add("hidden");
  document.querySelector(".modal_book_react").classList.add("hidden");
  document.querySelector(".modal_book_go").classList.add("hidden");
  document.body.classList.remove("overflow");
}

const bookJS = document.querySelector("#book-js");
bookJS.onclick = (e) => {
  e.preventDefault();
  showModal("js");
};
const bookReact = document.querySelector("#book-react");
bookReact.onclick = (e) => {
  e.preventDefault();
  showModal("react");
};
const bookGo = document.querySelector("#book-go");
bookGo.onclick = (e) => {
  e.preventDefault();
  showModal("go");
};

//when click on X close the modal
close = document.querySelectorAll(".close");
close.forEach((element) => {
  element.onclick = () => closeModals();
});
