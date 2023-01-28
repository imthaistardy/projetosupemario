const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const fechaModal = document.querySelector(".fechar-modal")
const video = document.querySelector("#video")
const linkDoVideo = video.src


botaoTrailer.addEventListener("click", () => {
  modal.classList.add("aberto")
  video.setAttribute("src", linkDoVideo)
})

fechaModal.addEventListener("click", () => {
  modal.classList.remove("aberto")
  video.setAttribute("src", "")
})
