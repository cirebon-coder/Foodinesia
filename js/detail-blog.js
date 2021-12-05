const id = localStorage.getItem("data-blog");
const hasil = dataBlog[Number(id - 1)];

const titleTab = document.querySelector("title");
const elmGambar = document.querySelector(".imgWrap img");
const breadcumb = document.querySelector(".breadcumb span");
const title = document.querySelector(".title h1");
const elmTanggal = document.querySelector(".title span");
const elmDeskripsi = document.querySelector(".deskripsi p");
const elmSumber = document.querySelector(".deskripsi span");
const subtitle = document.querySelector("title");
const { gambar, deskripsi, judul, sumber, tanggal } = hasil;

function setEl(element, content = judul) {
  element.innerHTML = content;
}


elmGambar.setAttribute("src", "../images/blog/" + gambar);

// setEl(eldeskripsi, deskripsi);
setEl(breadcumb);
setEl(title);
setEl(titleTab);
setEl(elmTanggal, tanggal);
setEl(elmDeskripsi, deskripsi);
setEl(elmSumber, sumber);
