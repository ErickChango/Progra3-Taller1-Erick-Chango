package com.itsqmet.ejercicio_progra.service;

import com.itsqmet.ejercicio_progra.model.Producto;
import com.itsqmet.ejercicio_progra.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> obtenerTodo(){
        return productoRepository.findAll();
    }

    public Optional<Producto> buscarporId(Long id){
        return productoRepository.findById(id);
    }

    public Producto crearproducto(Producto producto){
        return productoRepository.save(producto);
    }

    public boolean eliminar(Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Producto> actualizar(Long id, Producto productoActualizado) {
        return productoRepository.findById(id).map(producto -> {
            producto.setNombre(productoActualizado.getNombre());
            producto.setDescripcion(productoActualizado.getDescripcion());
            producto.setPrecio(productoActualizado.getPrecio());
            producto.setStock(productoActualizado.getStock());
            producto.setCategoria(productoActualizado.getCategoria());
            return productoRepository.save(producto);
        });
    }

}
