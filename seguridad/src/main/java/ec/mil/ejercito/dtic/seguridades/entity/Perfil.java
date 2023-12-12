package ec.mil.ejercito.dtic.seguridades.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.List;

/**
 * Clase para gestionar los perfiles de un usuario
 * 
 */
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "perfil")
public class Perfil implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "perfil_id")
	private Integer perfilId;

	@Column(name = "perfil_nombre", unique = true, nullable = false, length = 50)
	private String perfilNombre;

	@Column(name = "perfil_descripcion", length = 200)
	private String perfilDescripcion;

	@Column(name = "perfil_activo")
    private Integer perfilActivo;

	@ManyToOne
	@JoinColumn(name = "sistema_id")
	private Sistema sistema;
	@OneToMany(mappedBy = "perfil")
	public List<UsuarioPerfil> usuarios;

}