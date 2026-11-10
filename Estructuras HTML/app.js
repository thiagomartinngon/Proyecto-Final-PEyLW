function redirigirAPlantilla(idAlbum) {
    localStorage.setItem("idAlbumSeleccionado", idAlbum);
    window.location.href = "PaginaDeCompraBase.html";
}


function actualizarContadorIndex() { 
    const contador = document.getElementById("contadorCarrito"); 
    if (!contador) return; 

    const carrito = JSON.parse(localStorage.getItem("carritoTienda")) || []; 
    const totalProductos = carrito.reduce((acumulador, item) => acumulador + (item.cantidad || 0), 0); 
    
    contador.textContent = totalProductos; 
} 

document.addEventListener("DOMContentLoaded", actualizarContadorIndex);