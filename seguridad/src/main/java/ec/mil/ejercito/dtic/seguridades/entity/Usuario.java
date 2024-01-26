package ec.mil.ejercito.dtic.seguridades.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "usuario_id", nullable = false)
    private Long usuarioId;

    @NotNull(message = "Nombre de usuario requerido")
    @Column(name = "usuario_nombre", nullable = false, unique = true, length = 10)
    private String usuarioNombre;
    @Column(name = "usuario_clave", nullable = false, length = 100)
    private String usuarioClave;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "usuario_fecha_creacion", nullable = false)
    private LocalDateTime usuarioFechaCreacion;

    @Email
    @Column(name = "usuario_correo", unique = true, nullable = false)
    private String uusarioCorreo;

    @OneToMany(mappedBy = "usuario")
    private List<UsuarioPerfil> perfilesUsuario;

}