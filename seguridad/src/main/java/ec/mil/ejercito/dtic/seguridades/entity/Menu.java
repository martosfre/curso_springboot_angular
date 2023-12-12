package ec.mil.ejercito.dtic.seguridades.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Clase que permitirá gestionar los diferentes menús
 * @author <a href="mailto:mtoscano@matoosfe.com">Soporte Matoosfe</a>
 * 2023-11-22
 */
@Getter
@Setter
@Entity
@Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "menu_id", nullable = false)
    private Long menuId;

    @Column(name = "menu_nombre", unique = true, nullable = false, length = 50)
    private String menuNombre;

    @Column(name = "menu_descripcion", length = 200)
    private String menuDescripcion;

    @Column(name = "menu_url", nullable = false, length = 200)
    private String menuUrl;

    @Column(name = "menu_prden", nullable = false)
    private Integer menuOrden;

    @Column(name = "menu_icono", length = 50)
    private String menuIcono;

    @OneToMany(mappedBy = "submenuPadre")
    private List<Menu> submenus;

    @ManyToOne
    @JoinColumn(name = "menu_id_padre")
    private Menu submenuPadre;

    @ManyToOne
    @JoinColumn(name = "sistema_id")
    private Sistema sistema;

}