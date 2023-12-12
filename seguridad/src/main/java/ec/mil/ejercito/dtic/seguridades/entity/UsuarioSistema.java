package ec.mil.ejercito.dtic.seguridades.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "usuario_sistema")
public class UsuarioSistema {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ususis_id", nullable = false)
    private Long ususisId;
    @ManyToOne
    @JoinColumn(name = "sistema_id")
    private Sistema sistema;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "horario_id")
    private Horario horario;

}