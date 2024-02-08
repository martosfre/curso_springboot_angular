package ec.mil.ejercito.dtic.seguridades.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({Exception.class})
    public ResponseEntity<Object> handleRuntimeException(RuntimeException e, WebRequest request) {
        ExceptionResponse excRes = new ExceptionResponse();
        excRes.setErrorMessage(e.getMessage());
        excRes.callerURL(request.getContextPath());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(excRes);
    }
    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<Object> handleResourceNotFoundException(RuntimeException e, WebRequest request) {
        ExceptionResponse excRes = new ExceptionResponse();
        excRes.setErrorMessage(e.getMessage());
        excRes.callerURL(request.getContextPath());
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(excRes);
    }

}
