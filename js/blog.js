const title = document.querySelector('title');
const container = document.querySelector(".content");
let delay = 0.5;
function fetchData(dataBlog) {
  dataBlog.forEach((data) => {
    const card = `
      <div class="card" style="--i: ${delay++}">
              <img class="desc" data-id="${data.id}" src="images/blog/${data.gambar}" alt="${data.id
      }" loading="lazy"/>
            <div class="description">
              <a href="details/detail-blog.html">
              <h2 class="name" data-id="${data.id}">${data.judul}</h2>
            </a>
              <p class="desc" data-id="${data.id}">${data.deskripsi.substring(0, 100)}...
              </p>
              <p class="tanggal"><i class="fas fa-calendar-alt"></i> ${data.tanggal
      }</p>
            </div>
          </div>
      `;

    container.innerHTML += card;
  });
}

fetchData(dataBlog);

container.onclick = (e) => {
  if (e.target.className == "name" || e.target.className == "desc") {
    const id = e.target.getAttribute("data-id");
    localStorage.setItem("data-blog", id);
    window.location.href = "details/detail-blog.html"
    console.log(id);
  }
};
