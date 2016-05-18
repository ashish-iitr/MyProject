import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Contact} from "./contact";


@Component({
	selector: 'contact',
    template: `
        <div>
        	<div>
        		<label for="first-name">First Name:</label> <input [(ngModel)]="contact.firstName" type="text">
        	</div>
        	<div>
        		<label for="last-name">Last Name:</label> <input [(ngModel)]="contact.lastName" type="text">
        	</div>
        	<div>
        		<label for="email">Email:</label> <input [(ngModel)]="contact.email" type="text">
        	</div>
        	<div>
        		<label for="phone">Phone:</label> <input [(ngModel)]="contact.phone" type="text">
        	</div>
            <br><button (click)="onCreateNew()">create contact from this contact</button>        	       	
        </div>
    `,
    inputs: ["contact"],
    styles: [`
    	label{
    		display:inline-block;
    		width:100px;
    	}
    	input{
    		width:250px;
    	}
    `]
})

export class ContactComponent {
	public contact: Contact = null;

    constructor(private _router: Router) { };
    
    onCreateNew(){
        //this._router.navigate(['NewContactFromContact', { lastName: this.contact.lastName }]);
        this._router.navigate(['NewContact', { lastName: this.contact.lastName }]);
    }
}