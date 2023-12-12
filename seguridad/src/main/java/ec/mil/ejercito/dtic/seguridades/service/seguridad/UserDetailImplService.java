package ec.mil.ejercito.dtic.seguridades.service.seguridad;

import ec.mil.ejercito.dtic.seguridades.entity.Usuario;
import ec.mil.ejercito.dtic.seguridades.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailImplService implements UserDetailsService {
    //Inyección a través del constructor en lugar de @Autowired
    private UsuarioRepository usuarioRepository;
    public UserDetailImplService(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findByUsuarioNombre(username);
        User.UserBuilder builder;
        if(usuario.isPresent()){
            Usuario usuarioEnc = usuario.get();
            builder = User.withUsername(usuarioEnc.getUsuarioNombre());
            builder.password(usuarioEnc.getUsuarioClave());
        }else{
            throw new UsernameNotFoundException("Usuario no encontrado");
        }

        return builder.build();
    }
}
