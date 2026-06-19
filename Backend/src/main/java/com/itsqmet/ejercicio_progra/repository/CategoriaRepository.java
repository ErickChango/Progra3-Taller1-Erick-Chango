package com.itsqmet.ejercicio_progra.repository;

import com.itsqmet.ejercicio_progra.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
