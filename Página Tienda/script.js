let carrito = [];

function agregarAlCarrito(precio, nombre) {
    const producto = {
        precio: precio,
        nombre: nombre
    };
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    let totalCarrito = 0;

    carrito.forEach((producto, index) => {
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        listaCarrito.appendChild(itemCarrito);
        totalCarrito += producto.precio;
    });

    const totalCarritoElemento = document.getElementById('total-carrito');
    totalCarritoElemento.textContent = totalCarrito;
}
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

let carritoVisible = false;

function toggleCarrito() {
    const carritoDesplegable = document.getElementById('carrito-desplegable');
    carritoVisible = !carritoVisible;
    if (carritoVisible) {
        carritoDesplegable.style.display = 'block';
    } else {
        carritoDesplegable.style.display = 'none';
    }
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
}

window.onload = function() {
    cargarCarritoDesdeLocalStorage();
};

window.onbeforeunload = function() {
    guardarCarritoEnLocalStorage();
};
