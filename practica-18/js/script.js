window.onload = function() {
    alert("Al aceptar cambia todo");

    document.getElementById('title').textContent = "maggots for brain";
    document.getElementById('title').style.color = "rgb(32, 18, 29)";
    
    const parrafos = document.querySelectorAll('.text-p');
    parrafos[0].textContent = "but that's just the thing that happens";
    parrafos[1].textContent = "when my baby goes away";
    
    document.body.style.backgroundColor = "rgb(90, 55, 81)";
};
