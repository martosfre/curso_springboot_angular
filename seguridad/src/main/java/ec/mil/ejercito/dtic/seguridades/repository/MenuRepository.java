package ec.mil.ejercito.dtic.seguridades.repository;

import ec.mil.ejercito.dtic.seguridades.entity.Menu;
import ec.mil.ejercito.dtic.seguridades.entity.Sistema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Clase para administrar las operaciones de base de datos relacionadas a la tabla Menú
 */
public interface MenuRepository extends JpaRepository<Menu, Long> {
    @Query("SELECT m FROM Menu m WHERE m.menuNombre = :menuNombre")
    Menu findMenuByNombreMenu(String menuNombre);

    List<Menu> findBySistema(Sistema sistema);
}
