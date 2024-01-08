package ec.mil.ejercito.dtic.seguridades.controller;

import ec.mil.ejercito.dtic.seguridades.dto.SistemaDto;
import ec.mil.ejercito.dtic.seguridades.entity.Sistema;
import ec.mil.ejercito.dtic.seguridades.service.SistemaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //Anotación para identificar que la clase es un servicio web de tipo REST
@RequestMapping("/api/sistemaCon") //http://localhost:8080/seguridad/api/sistema // Configurar el root del Servicio
@Tag(name = "Sistema API", description = "Api para manejar las operaciones de Sistemas")
public class SistemaControllerMap {
    @Autowired
    private SistemaService sistemaService;

    @Autowired
    private ModelMapper modelMapper;

    //Métodos de conversión para el mapping
    private SistemaDto convertSistemaDto(Sistema sistema) {
        return modelMapper.map(sistema, SistemaDto.class);
    }

    private Sistema convertSistema(SistemaDto sistemaDto) {
        return modelMapper.map(sistemaDto, Sistema.class);
    }

    @PostMapping("/crear")
    @Operation(summary = "Operación para crear un sistema")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Sistema creado correctamente"),
            @ApiResponse(responseCode = "400", description = "Recurso no encontrado")
            })
    public ResponseEntity<SistemaDto> crearSistema(@RequestBody SistemaDto sistemaDto) {
        var sistema = convertSistema(sistemaDto);
        var sistemaDtoRes = convertSistemaDto(sistemaService.guardarActualizarSistema(sistema));
        return new ResponseEntity<>(sistemaDtoRes, HttpStatus.CREATED);
    }

    @GetMapping //Configuración del endpoint para la operación GET
    public ResponseEntity<List<SistemaDto>> buscarTodos() {
        return ResponseEntity.ok(sistemaService.buscarTodos()
                .stream().map(this::convertSistemaDto).toList());
    }

    /* Configuración del endpoint para la operación GET con parámetro representado por {} y
     @PathVariable
     */
    @GetMapping("/{id}")
    public ResponseEntity<SistemaDto> buscarSistema(@PathVariable Long id) {
        return ResponseEntity.ok(convertSistemaDto(sistemaService.buscarPorId(id)));
    }

}
