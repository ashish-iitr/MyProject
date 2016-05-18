import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AutoGrowDirective} from "./auto-grow.directive"




@Component({
    selector: 'todo-app',
    template: `
    <h1>My Angular 2 App</h1>
    <div class="row">
    	<div class="col-lg-6">
    	<courses></courses>
    	</div>
    	<div class="col-lg-6">
    	<authors></authors>
    	</div>
    	<div class="col-lg-6">
    	<input type="text" autoGrow />
    	</div>
    </div>    
    `,
    directives: [CoursesComponent, AuthorsComponent, AutoGrowDirective],

})
export class AppComponent { }