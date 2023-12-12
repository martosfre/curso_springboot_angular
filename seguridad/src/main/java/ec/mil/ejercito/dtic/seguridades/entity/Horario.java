package ec.mil.ejercito.dtic.seguridades.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;


@Getter
@Setter
@Entity
@Table(name = "horario")
public class Horario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "horarioId", nullable = false)
    private Long horarioId;
    @Column(name = "horario_nombre", nullable=false)
    private String horarioNombre;
    @Column(name = "horario_descripcion", nullable=false)
    private String horarioDescripcion;
    @Temporal(TemporalType.TIME)
    @Column(name = "horario_entrada")
    private Date horarioEntrada;

    @Temporal(TemporalType.TIME)
    @Column(name = "horario_salida")
    private Date horarioSalida;

}