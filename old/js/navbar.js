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

window.addEventListener('resize', function() {
  var toggler = document.getElementById('navbar-toggler')
  var menu = document.getElementById('navbar-links')

  if(window.innerWidth > 768) {
    document.getElementById('navbar-links').style.display = 'flex'
    toggler.classList.remove('is-active')
  }
  if(window.innerWidth <= 768) {
    document.getElementById('navbar-links').style.display = 'none'
  }
})

