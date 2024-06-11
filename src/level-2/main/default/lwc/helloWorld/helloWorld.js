import { LightningElement, wire } from 'lwc';
import getString from '@salesforce/apex/Controller.getString';

export default class HelloWorld extends LightningElement {
	greeting;
	error;

	@wire(getString)
	getString({ data, error }) {
		if (data) {
			this.greeting = data;
			this.error = undefined;
		}
		if (error) {
			this.error = error;
			this.greeting = undefined;
		}
	}
}
