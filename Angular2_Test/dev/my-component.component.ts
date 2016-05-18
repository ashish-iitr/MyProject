import {Component} from "angular2/core";
import {TestComponent} from "./test.component"
import {OnInit} from "angular2/core";

//style directive, class directive, attribute directive used in the code

@Component({
	selector: 'my-component',
	template: `
		<h2>This is test</h2>
		<p>Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : '' ">{{name}}</span></p>
		<span [class.is-awesome] = "inputElement.value==='yes'">Angular 2 is awesome.</span>
		<p>Its a modular based javascript framework build with different types of component. Component takes metadata object to shape your view with data.  </p>
		<br><br>
		Do you feel the same? 
		<input type="text" #inputElement (keyup)="0" placeholder="enter yes to see magic">
		<br><br>
		<button [disabled]="inputElement.value!=='yes'">enable if yes</button>
		<test></test>
	`,
	styleUrls: ['src/css/mycomponent.css'],
	directives: [TestComponent]
})
export class MyComponentComponent implements OnInit{
	name: string;

	// constructor(){
	// 	this.name = "ashish";
	// }

	
    // life cycle hooks, these are the events fired through life cycle of component
	ngOnInit():any {
		this.name = "ashish.";
	}
}