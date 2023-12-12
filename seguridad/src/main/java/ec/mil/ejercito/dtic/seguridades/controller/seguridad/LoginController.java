package ec.mil.ejercito.dtic.seguridades.controller.seguridad;

import ec.mil.ejercito.dtic.seguridades.dto.UsuarioDto;
import ec.mil.ejercito.dtic.seguridades.service.seguridad.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class LoginController {
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity getToken(@RequestBody UsuarioDto usuarioDto){
        UsernamePasswordAuthenticationToken credencial =
                new UsernamePasswordAuthenticationToken(usuarioDto.getUsuarioNombre(),
                        usuarioDto.getUsuarioClave());

        //Autenticar al usuario utilizando el manejador de autencicación
        Authentication authentication = authenticationManager.authenticate(credencial);

        //Generar el token
        String jwts = jwtService.getToken(authentication.getName());

        //Genera la respuesta con el token
        return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, JwtService.PREFIX + jwts)
                .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization")
                .build();
    }
}
