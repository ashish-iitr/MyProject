import {Component} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";



@Component({
	selector: "new-contact",
   /* template: `
    <br>create new contact<br><br>
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
        	<div>
        		<label for="first-name">First Name:</label> 
                <input type="text" id="first-name" ngControl="firstName" [(ngModel)]="newContact.firstName" 
                required #firstName="ngForm">
                <span *ngIf="!firstName.valid">Not Valid</span>
        	</div>
        	<div>
        		<label for="last-name">Last Name:</label> 
                <input type="text" id="last-name" ngControl="lastName" [(ngModel)]="newContact.lastName" required>
        	</div>
        	<div>
        		<label for="email">Email:</label> 
                <input type="text" id="email" ngControl="email" [(ngModel)]="newContact.email" required>
        	</div>
        	<div>
        		<label for="phone">Phone:</label> 
                <input type="text" id="phone" ngControl="phone" [(ngModel)]="newContact.phone" required>
        	</div> 
        	<div>
        		<button type="submit" [disabled]="!myForm.form.valid" > New Contact</button>
        	</div>      	       	
        </form>
    `,*/
    template: `
    <br>create new contact<br><br>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div>
                <label for="first-name">First Name:</label> 
                <input type="text" id="first-name" [ngFormControl]="myForm.controls['firstName']"
                #firstName="ngForm">
                <span *ngIf=!firstName.valid>Not Valid</span>
            </div>
            <div>
                <label for="last-name">Last Name:</label> 
                <input type="text" id="last-name" [ngFormControl]="myForm.controls['lastName']">
            </div>
            <div>
                <label for="email">Email:</label> 
                <input type="text" id="email" [ngFormControl]="myForm.controls['email']">
            </div>
            <div>
                <label for="phone">Phone:</label> 
                <input type="text" id="phone" [ngFormControl]="myForm.controls['phone']">
            </div> 
            <div>
                <button type="submit" [disabled]="!myForm.valid"> New Contact</button>
            </div>                     
        </form>
    `,
    providers: [ContactService],
    styles: [`
    	label{
    		display:inline-block;
    		width:100px;
    	}
    	input{
    		width:250px;
    	}
        .ng-invalid{
            border: 1px solid red;
        }
    `]
})

export class NewContactComponent implements OnInit
{

    newContact: Contact;
    myForm: ControlGroup;

    constructor(private _contactService: ContactService, private _router: Router, 
        private _routeParams: RouteParams, private _formBuilder: FormBuilder) { }

    onSubmit(value){
        //this._contactService.insertContact(this.newContact);
        this._contactService.insertContact(this.myForm.value);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any{
        //this.newContact = { lastName: this._routeParams.get('lastName') };
        this.myForm = this._formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': [this._routeParams.get('lastName'), Validators.required],
            'email': ['', Validators.required],
            'phone': ['', Validators.required]
        })
    }
}