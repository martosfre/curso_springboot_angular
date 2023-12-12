package ec.mil.ejercito.dtic.seguridades.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
@Bean
    public OpenAPI customizeOpenApi(){
        return new OpenAPI()
              .info(new Info()
                      .title("Ejercito Seguridad")
                      .description("Ejercito Seguridad")
                      .version("1.0")
                      .license(new License().name("Apache 2.0").url("http://www.apache.org/licenses/LICENSE-2.0.html")));
    }
}
