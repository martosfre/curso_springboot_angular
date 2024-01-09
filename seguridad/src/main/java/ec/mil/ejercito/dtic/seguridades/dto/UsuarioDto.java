package ec.mil.ejercito.dtic.seguridades.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UsuarioDto {
    private Long usuarioId;
    private String usuarioNombre;
    private String usuarioClave;
    private LocalDateTime usuarioFechaCreacion;
    private String usuarioCorreo;

    private String token;
}
