package ec.mil.ejercito.dtic.seguridades.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "perfil_menu")
public class PerfilMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "permen_id", nullable = false)
    private Long permen_id;
    @ManyToOne
    @JoinColumn(name = "perfil_id")
    public Perfil perfil;
    @ManyToOne
    @JoinColumn(name = "menu_id")
    public Menu menu;
    @Column(name = "permen_guardar")
    public boolean permenGuardar;
    @Column(name = "permen_actualizar")
    public boolean permenActualizar;
    @Column(name = "permen_eliminar")
    public boolean permenEliminar;
    @Column(name = "permen_consultarr")
    public boolean permenConsultar;

}