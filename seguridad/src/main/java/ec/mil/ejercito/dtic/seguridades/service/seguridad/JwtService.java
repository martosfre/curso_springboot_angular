package ec.mil.ejercito.dtic.seguridades.service.seguridad;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtService {
    public static final long EXPIRE_TIME = 54000000; //15 minutos
    public static final String PREFIX = "Bearer"; //Tipo de Autenticación
    public static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); //Semilla para generación.

    /**
     * Método para generar el token
     * @param nombreUsuario
     * @return
     */
    public String getToken(String nombreUsuario){
        return Jwts.builder()
                .setSubject(nombreUsuario)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE_TIME))
                .signWith(key)
                .compact();
    }

    /**
     * Método para recuperar el usuario autenticado basado en el token
     * @param request
     * @return
     */
    public String getAuthUser(HttpServletRequest request){
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(token != null){
            String usuario = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
            if(usuario != null){
                return usuario;
            }
        }
        return null;
    }
}
