package com.itsqmet.ejercicio_progra.service;

import com.itsqmet.ejercicio_progra.model.Proveedor;
import com.itsqmet.ejercicio_progra.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProveedorService {

    @Autowired
    private ProveedorRepository proveedorRepository;

    public List<Proveedor> obtenerTodo() {
        return proveedorRepository.findAll();
    }

    public Optional<Proveedor> buscarPorId(Long id) {
        return proveedorRepository.findById(id);
    }

    public Proveedor crear(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    public boolean eliminar(Long id) {
        if (proveedorRepository.existsById(id)) {
            proveedorRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Proveedor> actualizar(Long id, Proveedor proveedorActualizado) {
        return proveedorRepository.findById(id).map(proveedor -> {
            proveedor.setNombre(proveedorActualizado.getNombre());
            proveedor.setTelefono(proveedorActualizado.getTelefono());
            proveedor.setEmail(proveedorActualizado.getEmail());
            proveedor.setDireccion(proveedorActualizado.getDireccion());
            return proveedorRepository.save(proveedor);
        });
    }
}
