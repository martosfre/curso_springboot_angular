package ec.mil.ejercito.dtic.seguridades.controller;

import ec.mil.ejercito.dtic.seguridades.dto.SistemaDto;
import ec.mil.ejercito.dtic.seguridades.entity.Sistema;
import ec.mil.ejercito.dtic.seguridades.service.SistemaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //Anotación para identificar que la clase es un servicio web de tipo REST
@RequestMapping("/api/sistema") //http://localhost:8080/seguridad/api/sistema // Configurar el root del Servicio
public class SistemaController {
    @Autowired
    private SistemaService sistemaService;

    @PostMapping("/crear") //Configuración del endpoint para la operación POST
    public ResponseEntity<Sistema> crearSistema(@RequestBody Sistema sistema) {
        return ResponseEntity.ok(sistemaService.guardarActualizarSistema(sistema));
    }

    @GetMapping //Configuración del endpoint para la operación GET
    public ResponseEntity<List<Sistema>> buscarTodos() {
        return ResponseEntity.ok(sistemaService.buscarTodos());
    }

    /* Configuración del endpoint para la operación GET con parámetro representado por {} y
     @PathVariable
     */
    @GetMapping("/{id}")
    public ResponseEntity<Sistema> buscarSistema(@PathVariable Long id) {
        return ResponseEntity.ok(sistemaService.buscarPorId(id));
    }

}
