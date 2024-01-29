package ec.mil.ejercito.dtic.seguridades.exception;

public class SecurityServiceException extends Exception {

	private static final long serialVersionUID = -470180507998010368L;

	public SecurityServiceException() {
		super();
	}

	public SecurityServiceException(final String message) {
		super(message);
	}
}
