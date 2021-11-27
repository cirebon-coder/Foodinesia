const id = localStorage.getItem("data-food");
const hasil = dataEksplorasi[Number(id - 1)];

const elbahan = document.querySelector(".bahan ul");
const elmanfaat = document.querySelector(".manfaat ul");
const elprosedur = document.querySelector(".prosedur ul");
const breadcumb = document.querySelector(".breadcumb span");
const eldeskripsi = document.querySelector(".tags p");
const imgCard = document.querySelector(".imgCard img");
const tag = document.querySelector(".tag span");
const title = document.querySelector(".title h2");
const subtitle = document.querySelector("title");
const elmSumber = document.querySelector(".sumber span");
let { bahan, manfaat, prosedur, nama, gambar, deskripsi, kategori, sumber } = hasil;

function setEl(element, content = nama) {
  element.innerHTML = content;
}

function list(data, element) {
  data.forEach((e) => {
    let el = `
    <li>${e}</li>`;
    element.innerHTML += el;
  });
}

imgCard.setAttribute("src", "../" + gambar);

setEl(subtitle);
setEl(title);
setEl(tag, kategori);
setEl(eldeskripsi, deskripsi);
setEl(breadcumb);
setEl(elmSumber, sumber);

list(bahan, elbahan);
list(manfaat, elmanfaat);
list(prosedur, elprosedur);
