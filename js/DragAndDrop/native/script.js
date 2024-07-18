// Selecciona el elemento arrastrable y las zonas de soltado
const dragItem = document.getElementById("drag1");
const dropzones = document.querySelectorAll(".dropzone");

// Añade los eventos necesarios al elemento arrastrable
dragItem.addEventListener("dragstart", dragStart);
dragItem.addEventListener("dragend", dragEnd);

// Añade los eventos necesarios a cada zona de soltado
dropzones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("dragenter", dragEnter);
    zone.addEventListener("dragleave", dragLeave);
    zone.addEventListener("drop", drop);
});

// Función que se ejecuta cuando se empieza a arrastrar el elemento
function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    setTimeout(() => {
        e.target.style.display = "none";
    }, 0);
}

// Función que se ejecuta cuando se termina de arrastrar el elemento
function dragEnd(e) {
    e.target.style.display = "block";
}

// Función que permite que el elemento sea soltado en la zona
function dragOver(e) {
    e.preventDefault();
}

// Función que se ejecuta cuando el elemento arrastrado entra en la zona de soltado
function dragEnter(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
}

// Función que se ejecuta cuando el elemento arrastrado sale de la zona de soltado
function dragLeave(e) {
    e.target.style.backgroundColor = "transparent";
}

// Función que se ejecuta cuando el elemento es soltado en la zona
function drop(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "transparent";
    const data = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    e.target.appendChild(draggedElement);
}
