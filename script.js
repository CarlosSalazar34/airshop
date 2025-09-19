console.log("hola muchachos :D");


const containerSearch = document.querySelector(".search-box");
const inputSearch = containerSearch.querySelector("input");

inputSearch.addEventListener("focus", () => {
  inputSearch.style.width = "150px";
});

inputSearch.addEventListener("blur", () => {
  inputSearch.style.width = "100px";
});
