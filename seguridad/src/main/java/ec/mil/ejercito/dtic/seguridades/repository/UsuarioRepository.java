package ec.mil.ejercito.dtic.seguridades.repository;

import ec.mil.ejercito.dtic.seguridades.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsuarioNombre(String usuarioNombre);
}
