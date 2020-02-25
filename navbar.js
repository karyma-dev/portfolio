function menuToggler() {
  var toggler = document.getElementById('navbar-toggler')
  var menu = document.getElementById('navbar-links')

  if(menu.style.display === 'none'){
    toggler.classList.add('is-active')
    menu.style.display = 'flex'
  } else  {
    toggler.classList.remove('is-active')
    menu.style.display = 'none'
  }
}

