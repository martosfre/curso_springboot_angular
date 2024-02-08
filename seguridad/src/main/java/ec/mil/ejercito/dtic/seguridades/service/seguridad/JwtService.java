package ec.mil.ejercito.dtic.seguridades.service.seguridad;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.audit4j.core.annotation.Audit;
import org.audit4j.core.annotation.AuditField;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwtService {
    public static final long EXPIRE_TIME = 54000000; //15 minutos
    public static final String PREFIX = "Bearer"; //Tipo de Autenticación
    public static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); //Semilla para generación.

    @Value("${jwt.secret}")
    private String SECRET_KEY;

    /**
     * Método para generar el token
     * @param nombreUsuario - Nombre del usuario
     * @return token generado
     */
    @Audit
    public String getToken(@AuditField(field = "usuario") String nombreUsuario){
        return Jwts.builder()
                .setSubject(nombreUsuario)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    /**
     * Método para recuperar el usuario autenticado basado en el token
     * @param request - solicitud
     * @return usuario autenticado
     */
    public String getAuthUser(HttpServletRequest request){
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if(token != null){
            return Jwts.parserBuilder()
                    .setSigningKey(SECRET_KEY)
                    .build()
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
        }
        return null;
    }
}
