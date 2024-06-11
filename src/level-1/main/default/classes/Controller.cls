public with sharing class Controller {
	@AuraEnabled(Cacheable=true)
	public static String getString() {
		return 'Hello, World!';
	}
}
