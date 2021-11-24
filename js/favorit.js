const btnLove = document.querySelector('.btnLove i');
const currentId = getId();


console.log(currentId);


btnLove.addEventListener('click', () => {

  btnLove.classList.toggle('fas');
  currentId.push(hasil.id)
  saveId(currentId);
})

function getId() {
  return JSON.parse(localStorage.getItem("data-favorit") || "[]");
}

function saveId(id) {
  localStorage.setItem("data-favorit", JSON.stringify(id));
}

currentId.map(numId => {

  if (id == Number(numId)) {
    btnLove.classList.add("fas")
  }
})