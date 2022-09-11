/* Menu Show */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    menu = document.getElementById(navId)

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show')
      document.body.classList.toggle('hide')
    })
  }
}
showMenu('menu-icon', 'menu')

/* Remove menu */
const navLink = document.querySelectorAll('.menu__link'),
  navMenu = document.getElementById('menu')

function linkAction() {
  navMenu.classList.remove('show')
  document.body.classList.remove('hide')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))
