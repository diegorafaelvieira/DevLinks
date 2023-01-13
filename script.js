function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a image
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", 'Foto preta e branca de Diego usando óculos escuro')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto colorida de Diego usando óculos escuro")
  }

}