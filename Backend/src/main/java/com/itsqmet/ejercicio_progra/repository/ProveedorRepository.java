package com.itsqmet.ejercicio_progra.repository;

import com.itsqmet.ejercicio_progra.model.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProveedorRepository extends JpaRepository<Proveedor, Long> {
}
