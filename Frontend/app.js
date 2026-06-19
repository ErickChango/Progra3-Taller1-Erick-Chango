const API_PRODUCTOS   = 'http://localhost:8080/api/productos';
const API_CATEGORIAS  = 'http://localhost:8080/api/categorias';
const API_PROVEEDORES = 'http://localhost:8080/api/proveedores';
const API_MOVIMIENTOS = 'http://localhost:8080/api/movimientos';

function mostrarSeccion(nombre) {
    document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
    document.getElementById('seccion-' + nombre).style.display = 'block';
}

// ===================== PRODUCTOS =====================

async function cargarProductos() {
    const response = await fetch(API_PRODUCTOS);
    const datos = await response.json();
    document.getElementById('msg-lista-productos').textContent = JSON.stringify(datos, null, 2);
}

async function buscarProductoPorId() {
    const id = document.getElementById('buscar-id-producto').value;
    const response = await fetch(`${API_PRODUCTOS}/${id}`);
    const datos = await response.json();
    document.getElementById('msg-buscar-producto').textContent = JSON.stringify(datos, null, 2);
}

async function crearProducto() {
    const producto = {
        nombre:      document.getElementById('nombre').value,
        categoria:   document.getElementById('categoria').value,
        descripcion: document.getElementById('descripcion').value,
        precio:      parseFloat(document.getElementById('precio').value),
        stock:       parseInt(document.getElementById('stock').value)
    };
    const response = await fetch(API_PRODUCTOS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    });
    const datos = await response.json();
    document.getElementById('msg-crear-producto').textContent =
        response.ok ? 'Producto creado: ' + JSON.stringify(datos) : 'Error: ' + JSON.stringify(datos);
}

async function actualizarProducto() {
    const id = document.getElementById('upd-id-producto').value;
    const producto = {
        nombre:      document.getElementById('upd-nombre').value,
        categoria:   document.getElementById('upd-categoria').value,
        descripcion: document.getElementById('upd-descripcion').value,
        precio:      parseFloat(document.getElementById('upd-precio').value),
        stock:       parseInt(document.getElementById('upd-stock').value)
    };
    const response = await fetch(`${API_PRODUCTOS}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    });
    const datos = await response.json();
    document.getElementById('msg-actualizar-producto').textContent =
        response.ok ? 'Actualizado correctamente' : 'Error: ' + JSON.stringify(datos);
}

async function eliminarProducto() {
    const id = document.getElementById('eliminar-id-producto').value;
    const response = await fetch(`${API_PRODUCTOS}/${id}`, { method: 'DELETE' });
    const datos = await response.json();
    document.getElementById('msg-eliminar-producto').textContent = JSON.stringify(datos);
}

// ===================== CATEGORIAS =====================

async function cargarCategorias() {
    const response = await fetch(API_CATEGORIAS);
    const datos = await response.json();
    document.getElementById('msg-lista-categorias').textContent = JSON.stringify(datos, null, 2);
}

async function buscarCategoriaPorId() {
    const id = document.getElementById('buscar-id-categoria').value;
    const response = await fetch(`${API_CATEGORIAS}/${id}`);
    const datos = await response.json();
    document.getElementById('msg-buscar-categoria').textContent = JSON.stringify(datos, null, 2);
}

async function crearCategoria() {
    const categoria = {
        nombre:      document.getElementById('cat-nombre').value,
        descripcion: document.getElementById('cat-descripcion').value
    };
    const response = await fetch(API_CATEGORIAS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoria)
    });
    const datos = await response.json();
    document.getElementById('msg-crear-categoria').textContent =
        response.ok ? 'Categoría creada: ' + JSON.stringify(datos) : 'Error: ' + JSON.stringify(datos);
}

async function actualizarCategoria() {
    const id = document.getElementById('upd-id-categoria').value;
    const categoria = {
        nombre:      document.getElementById('upd-cat-nombre').value,
        descripcion: document.getElementById('upd-cat-descripcion').value
    };
    const response = await fetch(`${API_CATEGORIAS}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoria)
    });
    const datos = await response.json();
    document.getElementById('msg-actualizar-categoria').textContent =
        response.ok ? 'Actualizado correctamente' : 'Error: ' + JSON.stringify(datos);
}

async function eliminarCategoria() {
    const id = document.getElementById('eliminar-id-categoria').value;
    const response = await fetch(`${API_CATEGORIAS}/${id}`, { method: 'DELETE' });
    const datos = await response.json();
    document.getElementById('msg-eliminar-categoria').textContent = JSON.stringify(datos);
}

// ===================== PROVEEDORES =====================

async function cargarProveedores() {
    const response = await fetch(API_PROVEEDORES);
    const datos = await response.json();
    document.getElementById('msg-lista-proveedores').textContent = JSON.stringify(datos, null, 2);
}

async function buscarProveedorPorId() {
    const id = document.getElementById('buscar-id-proveedor').value;
    const response = await fetch(`${API_PROVEEDORES}/${id}`);
    const datos = await response.json();
    document.getElementById('msg-buscar-proveedor').textContent = JSON.stringify(datos, null, 2);
}

async function crearProveedor() {
    const proveedor = {
        nombre:    document.getElementById('prov-nombre').value,
        telefono:  document.getElementById('prov-telefono').value,
        email:     document.getElementById('prov-email').value,
        direccion: document.getElementById('prov-direccion').value
    };
    const response = await fetch(API_PROVEEDORES, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proveedor)
    });
    const datos = await response.json();
    document.getElementById('msg-crear-proveedor').textContent =
        response.ok ? 'Proveedor creado: ' + JSON.stringify(datos) : 'Error: ' + JSON.stringify(datos);
}

async function actualizarProveedor() {
    const id = document.getElementById('upd-id-proveedor').value;
    const proveedor = {
        nombre:    document.getElementById('upd-prov-nombre').value,
        telefono:  document.getElementById('upd-prov-telefono').value,
        email:     document.getElementById('upd-prov-email').value,
        direccion: document.getElementById('upd-prov-direccion').value
    };
    const response = await fetch(`${API_PROVEEDORES}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proveedor)
    });
    const datos = await response.json();
    document.getElementById('msg-actualizar-proveedor').textContent =
        response.ok ? 'Actualizado correctamente' : 'Error: ' + JSON.stringify(datos);
}

async function eliminarProveedor() {
    const id = document.getElementById('eliminar-id-proveedor').value;
    const response = await fetch(`${API_PROVEEDORES}/${id}`, { method: 'DELETE' });
    const datos = await response.json();
    document.getElementById('msg-eliminar-proveedor').textContent = JSON.stringify(datos);
}

// ===================== MOVIMIENTOS =====================

async function cargarMovimientos() {
    const response = await fetch(API_MOVIMIENTOS);
    const datos = await response.json();
    document.getElementById('msg-lista-movimientos').textContent = JSON.stringify(datos, null, 2);
}

async function buscarMovimientoPorId() {
    const id = document.getElementById('buscar-id-movimiento').value;
    const response = await fetch(`${API_MOVIMIENTOS}/${id}`);
    const datos = await response.json();
    document.getElementById('msg-buscar-movimiento').textContent = JSON.stringify(datos, null, 2);
}

async function crearMovimiento() {
    const movimiento = {
        producto:    { id: parseInt(document.getElementById('mov-producto-id').value) },
        tipo:        document.getElementById('mov-tipo').value,
        cantidad:    parseInt(document.getElementById('mov-cantidad').value),
        observacion: document.getElementById('mov-observacion').value
    };
    const response = await fetch(API_MOVIMIENTOS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movimiento)
    });
    const datos = await response.json();
    document.getElementById('msg-crear-movimiento').textContent =
        response.ok ? 'Movimiento registrado: ' + JSON.stringify(datos) : 'Error: ' + JSON.stringify(datos);
}

async function eliminarMovimiento() {
    const id = document.getElementById('eliminar-id-movimiento').value;
    const response = await fetch(`${API_MOVIMIENTOS}/${id}`, { method: 'DELETE' });
    const datos = await response.json();
    document.getElementById('msg-eliminar-movimiento').textContent = JSON.stringify(datos);
}
