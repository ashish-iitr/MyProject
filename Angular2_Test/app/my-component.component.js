System.register(["angular2/core", "./test.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            //style directive, class directive, attribute directive used in the code
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                // constructor(){
                // 	this.name = "ashish";
                // }
                // life cycle hooks, these are the events fired through life cycle of component
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "ashish.";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n\t\t<h2>This is test</h2>\n\t\t<p>Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : '' \">{{name}}</span></p>\n\t\t<span [class.is-awesome] = \"inputElement.value==='yes'\">Angular 2 is awesome.</span>\n\t\t<p>Its a modular based javascript framework build with different types of component. Component takes metadata object to shape your view with data.  </p>\n\t\t<br><br>\n\t\tDo you feel the same? \n\t\t<input type=\"text\" #inputElement (keyup)=\"0\" placeholder=\"enter yes to see magic\">\n\t\t<br><br>\n\t\t<button [disabled]=\"inputElement.value!=='yes'\">enable if yes</button>\n\t\t<test></test>\n\t",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSx3RUFBd0U7WUFtQnhFO2dCQUFBO2dCQVlBLENBQUM7Z0JBVEEsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLElBQUk7Z0JBR0QsK0VBQStFO2dCQUNsRix1Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUN2QixDQUFDO2dCQTVCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUseW5CQVdUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUMzQixDQUFDOzt3Q0FBQTtnQkFhRiwyQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsdURBWUMsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG4vL3N0eWxlIGRpcmVjdGl2ZSwgY2xhc3MgZGlyZWN0aXZlLCBhdHRyaWJ1dGUgZGlyZWN0aXZlIHVzZWQgaW4gdGhlIGNvZGVcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8aDI+VGhpcyBpcyB0ZXN0PC9oMj5cblx0XHQ8cD5IaSwgSSdtIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJyBcIj57e25hbWV9fTwvc3Bhbj48L3A+XG5cdFx0PHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdID0gXCJpbnB1dEVsZW1lbnQudmFsdWU9PT0neWVzJ1wiPkFuZ3VsYXIgMiBpcyBhd2Vzb21lLjwvc3Bhbj5cblx0XHQ8cD5JdHMgYSBtb2R1bGFyIGJhc2VkIGphdmFzY3JpcHQgZnJhbWV3b3JrIGJ1aWxkIHdpdGggZGlmZmVyZW50IHR5cGVzIG9mIGNvbXBvbmVudC4gQ29tcG9uZW50IHRha2VzIG1ldGFkYXRhIG9iamVjdCB0byBzaGFwZSB5b3VyIHZpZXcgd2l0aCBkYXRhLiAgPC9wPlxuXHRcdDxicj48YnI+XG5cdFx0RG8geW91IGZlZWwgdGhlIHNhbWU/IFxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIiBwbGFjZWhvbGRlcj1cImVudGVyIHllcyB0byBzZWUgbWFnaWNcIj5cblx0XHQ8YnI+PGJyPlxuXHRcdDxidXR0b24gW2Rpc2FibGVkXT1cImlucHV0RWxlbWVudC52YWx1ZSE9PSd5ZXMnXCI+ZW5hYmxlIGlmIHllczwvYnV0dG9uPlxuXHRcdDx0ZXN0PjwvdGVzdD5cblx0YCxcblx0c3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtUZXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0bmFtZTogc3RyaW5nO1xuXG5cdC8vIGNvbnN0cnVjdG9yKCl7XG5cdC8vIFx0dGhpcy5uYW1lID0gXCJhc2hpc2hcIjtcblx0Ly8gfVxuXG5cdFxuICAgIC8vIGxpZmUgY3ljbGUgaG9va3MsIHRoZXNlIGFyZSB0aGUgZXZlbnRzIGZpcmVkIHRocm91Z2ggbGlmZSBjeWNsZSBvZiBjb21wb25lbnRcblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMubmFtZSA9IFwiYXNoaXNoLlwiO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
