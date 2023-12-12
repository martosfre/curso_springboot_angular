package ec.mil.ejercito.dtic.seguridades.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

/**
 * Clase que permitirá gestionar la información de Sistema, Subsistema y Módulos
 * @author <a href="mailto:mtoscano@matoosfe.com">Soporte Matoosfe</a>
 * 2023-11-22
 */

/************************
 * Lombok - Build Execution Deployment--Compiler--Annotation+Processors
 ***********************/
@NoArgsConstructor //Constructor vacio
@Getter //Todos los getters para los atributos private
@Setter //Todos los setters para los atributos private
/************************/

@Entity //Anotación Obligatoria que determina que la clase sea tratada como un Entity (JPA)
@Table(name = "sistema") //Anotación para identificar a cual tabla se va a mapear la clase
public class Sistema implements Serializable {
    @Id //Anotación Obligatorio y permite identificar la clave primaria
    @GeneratedValue(strategy = GenerationType.AUTO) //Método de Generación de PK
    @Column(name = "sistema_id", nullable = false) //Anotación para mapear la columna
    private Long sistemaId;

    @Column(name = "sistema_nombre", unique = true, nullable = false, length = 50)
    private String sistemaNombre;
    @Column(name = "sistemaDescripcion", length = 200)
    private String sistemaDescripcion;

    @Column(name = "sistema_contexto", nullable = false, unique = true)
    private String sistemaContexto;

    /* Se utiliza para ignorar el atributo en la generación del Json, en el consumo de un servicio REST
    para evitar problemas de recursividad o ciclo infinitos en la generación.
     */
    @JsonIgnore
    @OneToMany(mappedBy = "sistema") //Mappedby representa el nombre de atributo en la relación en la otra clase
    private List<Menu> menus;
    @JsonIgnore
    @OneToMany(mappedBy = "sistema")
    private List<Perfil> perfiles;

}