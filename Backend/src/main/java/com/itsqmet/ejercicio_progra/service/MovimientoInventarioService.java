package com.itsqmet.ejercicio_progra.service;

import com.itsqmet.ejercicio_progra.model.MovimientoInventario;
import com.itsqmet.ejercicio_progra.repository.MovimientoInventarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovimientoInventarioService {

    @Autowired
    private MovimientoInventarioRepository movimientoRepository;

    public List<MovimientoInventario> obtenerTodo() {
        return movimientoRepository.findAll();
    }

    public Optional<MovimientoInventario> buscarPorId(Long id) {
        return movimientoRepository.findById(id);
    }

    public MovimientoInventario crear(MovimientoInventario movimiento) {
        return movimientoRepository.save(movimiento);
    }

    public boolean eliminar(Long id) {
        if (movimientoRepository.existsById(id)) {
            movimientoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<MovimientoInventario> actualizar(Long id, MovimientoInventario movimientoActualizado) {
        return movimientoRepository.findById(id).map(movimiento -> {
            movimiento.setProducto(movimientoActualizado.getProducto());
            movimiento.setTipo(movimientoActualizado.getTipo());
            movimiento.setCantidad(movimientoActualizado.getCantidad());
            movimiento.setObservacion(movimientoActualizado.getObservacion());
            return movimientoRepository.save(movimiento);
        });
    }
}
