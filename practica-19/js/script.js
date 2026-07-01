window.onload = function() {
let pagina = document.querySelector('body');
if (pagina) { 
  pagina.addEventListener('click', function(event) {
  event.target.style.color = 'red';
});  
}
};
