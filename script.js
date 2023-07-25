function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pega a tag img
  const img = document.querySelector("#profile img")
  
  //substituir a img de acordo com o tema
  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/assets/janine.jfif')
  } else {
    img.setAttribute('src', './assets/assets/janine1.jpg')
  }

  
}