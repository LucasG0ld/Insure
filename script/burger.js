/* Sélection des éléments HTML */
let link = document.getElementById('ins-menu-link');
let burger = document.getElementById('ins-menu-burger');
let div = document.getElementById('ins-burger-container');
let content = document.getElementById('ins-content');
let footer = document.getElementById('ins-footer');


/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  div.classList.toggle('open')
  content.classList.toggle('dp-none')
  footer.classList.toggle('dp-none')

})