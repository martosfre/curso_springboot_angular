package ec.mil.ejercito.dtic.seguridades.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SistemaDto { //Clase de intercambio utilizada en los servicios web
    private Long sistemaId;
    private String sistemaNombre;
    private String sistemaDescripcion;
    private String sistemaContexto;
}
