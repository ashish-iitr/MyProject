import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';
import {ContactListComponent} from "./contacts/contact-list.component";
import {NewContactComponent} from "./contacts/new-contact.component"
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {HTTPTestComponent} from "./http-test/http-test.component";

@Component({
    selector: 'my-app',
    template: `
    	<header>
    		<nav>
    			<a [routerLink]="['Contacts']" >Contacts</a>
    			<a [routerLink]="['NewContact']" >New Contact</a>
    		</nav>
    	</header>
    	<div class="main">
    		<router-outlet></router-outlet>
            <http-test></http-test>
    	</div>
    `,
    directives: [MyComponentComponent, ContactListComponent, NewContactComponent, ROUTER_DIRECTIVES, HTTPTestComponent],
    styleUrls: ['src/css/mycomponent.css']
})

@RouteConfig([
		{ path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true },
		{ path: '/newcontact', name: 'NewContact', component: NewContactComponent },
        { path: '/newcontact/:lastName', name: 'NewContactFromContact', component: NewContactComponent }
])
export class AppComponent {

}