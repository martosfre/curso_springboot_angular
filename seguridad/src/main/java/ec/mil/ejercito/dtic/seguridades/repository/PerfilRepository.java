package ec.mil.ejercito.dtic.seguridades.repository;

import ec.mil.ejercito.dtic.seguridades.entity.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Clase para administrar las operaciones de base de datos relacionadas a la tabla Perfil
 */
public interface PerfilRepository extends JpaRepository<Perfil, Long> {
}
