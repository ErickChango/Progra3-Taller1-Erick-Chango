package com.itsqmet.ejercicio_progra.controller;

import com.itsqmet.ejercicio_progra.model.MovimientoInventario;
import com.itsqmet.ejercicio_progra.service.MovimientoInventarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/movimientos")
@CrossOrigin("*")
public class MovimientoInventarioController {

    @Autowired
    private MovimientoInventarioService movimientoService;

    @GetMapping
    public ResponseEntity<List<MovimientoInventario>> obtenerTodos() {
        return ResponseEntity.ok(movimientoService.obtenerTodo());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) {
        return movimientoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<?> crear(@Valid @RequestBody MovimientoInventario movimiento, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errores = new HashMap<>();
            result.getFieldErrors().forEach(error ->
                    errores.put(error.getField(), error.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errores);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(movimientoService.crear(movimiento));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @Valid @RequestBody MovimientoInventario movimiento, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errores = new HashMap<>();
            result.getFieldErrors().forEach(error ->
                    errores.put(error.getField(), error.getDefaultMessage()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errores);
        }
        return movimientoService.actualizar(id, movimiento)
                .map(actualizado -> ResponseEntity.ok((Object) actualizado))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("error", "Movimiento con id " + id + " no encontrado")));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id) {
        if (movimientoService.eliminar(id)) {
            return ResponseEntity.ok(Map.of("mensaje", "Movimiento eliminado correctamente"));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("error", "Movimiento con id " + id + " no encontrado"));
    }
}
