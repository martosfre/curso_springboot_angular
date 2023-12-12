package ec.mil.ejercito.dtic.seguridades.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "usuario_perfil")
public class UsuarioPerfil {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "usuper_id", nullable = false)
    private Long usuperId;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "perfil_id")
    private Perfil perfil;

}