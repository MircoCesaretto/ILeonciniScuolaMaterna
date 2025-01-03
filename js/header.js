const handleHeader = () => {

  const isDesktop = () =>{
    return window.innerWidth > 992 ? true : false
  }

  let header = document.querySelector('header')
  let body = document.querySelector('body')
  let spinner = document.getElementById('spinnerHome')
  let nav = document.getElementById('ulNav')
  let menuCol = document.getElementById('menuCol')
  let hamburgerMenu = document.getElementById('hamburgerMenu')

  body.style.overflow = "hidden"
  header.style.height = "100vh"
  header.style.transitionDelay = "0.4s";

  window.addEventListener('load',  () => {
    header.style.height = "100px"
    header.style.background = "#fcfcfc"
   
    setTimeout(() => {
      spinner.classList.add('d-none')
      header.style.transitionDelay = "";
      body.style.overflowY = "scroll"
      nav.style.transitionDuration = "2s"
      
      
      menuCol.classList.add("flex-row")
      if(isDesktop()){
        nav.classList.add("d-flex")
        nav.classList.remove("d-none")
      }else{
        hamburgerMenu.classList.add("d-block")
        hamburgerMenu.classList.remove("d-none")
      }

      window.addEventListener("resize", ()=>{
        if(isDesktop()){
          nav.classList.add("d-flex")
          nav.classList.remove("d-none")
          hamburgerMenu.classList.add("d-none")
        }else{
          nav.classList.add("d-none")
          hamburgerMenu.classList.add("d-block")
          hamburgerMenu.classList.remove("d-none")
        }
      })
    }, 400);

  })

  document.addEventListener("scroll", (event) => {
    if (window.scrollY) {
     header.style.height = "80px"
      header.style.background = "#fcfcfc"
    } else {
      
       header.style.height = "100px"
    }
  });

}
handleHeader()