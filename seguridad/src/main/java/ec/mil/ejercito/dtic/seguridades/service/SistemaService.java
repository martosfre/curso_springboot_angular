package ec.mil.ejercito.dtic.seguridades.service;

import ec.mil.ejercito.dtic.seguridades.entity.Sistema;
import ec.mil.ejercito.dtic.seguridades.repository.SistemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Clase para administrar los servicios relacionados con los Sistemas
 *
 * @author <a href="mailto:mtoscano@matoosfe.com">SOPORTE MATOOSFE</a>
 * 2023-11-23
 */
@Service //Anotación para identificar que la clase es un servicio, clase para gestionar la lógica de negocio
@Transactional(readOnly = true) //Anotación para configurar que el servicio no es transaccional por defecto
public class SistemaService {

    @Autowired //Ejecutar inyección de dependecia; es decir, crear una instancia de la clase cuando se utilice la misma
    private SistemaRepository sistemaRepository;

    @Transactional //Para configurar que el método es transaccional
    public Sistema guardarActualizarSistema(Sistema sistema) {
        return sistemaRepository.save(sistema);
    }

    @Transactional
    public String eliminar(Sistema sistema) {
        sistemaRepository.delete(sistema);
        return "Sistema eliminado correctamente";
    }

    public List<Sistema> buscarTodos() {
        return sistemaRepository.findAll();
    }

    public Sistema buscarPorId(Long id) {
        return sistemaRepository.findById(id).get();
    }

}
