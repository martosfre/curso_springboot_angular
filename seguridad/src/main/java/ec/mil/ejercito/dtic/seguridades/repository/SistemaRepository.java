package ec.mil.ejercito.dtic.seguridades.repository;

import ec.mil.ejercito.dtic.seguridades.entity.Sistema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.swing.*;

/**
 * Clase para administrar las operaciones de base de datos referente a la tabla sistema
 */
@Repository //Anotación para identificar que la interface es una clase que interactúa con la JPA (Bdd)
public interface SistemaRepository extends JpaRepository<Sistema, Long> {
    /*
    Spring Data JPA, para generar un método de consulta se utiliza el prefijo findBy seguido del nombre
    del atributo que se va a buscar y/o las operaciones con los mismos
     */
    Sistema findBySistemaNombre(String sistemaNombre);

    Sistema findBySistemaNombreOrSistemaContexto(String valor, String valorDos);
}
