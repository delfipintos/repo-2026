window.onload = function() {
let pagina = document.querySelector('body');
if (pagina) { 
  pagina.addEventListener('click', function(event) {

    if (event.target.tagName === 'IMG') {
                event.target.style.display = 'none';
      else {
                event.target.style.color = 'red';
}
            
        });
    }
};
