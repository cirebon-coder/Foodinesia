const { makanan } = data;
const id = localStorage.getItem("data-food");
const hasil = makanan[Number(id - 1)];

const elbahan = document.querySelector(".bahan ul");
const elmanfaat = document.querySelector(".manfaat ul");
const elprosedur = document.querySelector(".prosedur ul");
const breadcumb = document.querySelector(".breadcumb span");
const deskripsi = document.querySelector(".tags p");
const imgCard = document.querySelector(".imgCard img");
const tag = document.querySelector(".tag span");
const title = document.querySelector(".title h1");

let manfaat = hasil.manfaat;
let prosedur = hasil.prosedur;
let bahan = hasil.bahan;

title.innerHTML = hasil.nama;
tag.innerHTML = hasil.nama;
deskripsi.innerHTML = hasil.deskripsi;
breadcumb.innerHTML = hasil.nama;
imgCard.setAttribute("src", "../" + hasil.gambar);

function list(data, element) {
  data.forEach((e) => {
    let el = `
        <li>${e}</li>`;
    element.innerHTML += el;
  });
}

list(bahan, elbahan);
list(manfaat, elmanfaat);
list(prosedur, elprosedur);
