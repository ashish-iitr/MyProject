System.register(["angular2/core", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ;
                ContactComponent.prototype.onCreateNew = function () {
                    //this._router.navigate(['NewContactFromContact', { lastName: this.contact.lastName }]);
                    this._router.navigate(['NewContact', { lastName: this.contact.lastName }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n        <div>\n        \t<div>\n        \t\t<label for=\"first-name\">First Name:</label> <input [(ngModel)]=\"contact.firstName\" type=\"text\">\n        \t</div>\n        \t<div>\n        \t\t<label for=\"last-name\">Last Name:</label> <input [(ngModel)]=\"contact.lastName\" type=\"text\">\n        \t</div>\n        \t<div>\n        \t\t<label for=\"email\">Email:</label> <input [(ngModel)]=\"contact.email\" type=\"text\">\n        \t</div>\n        \t<div>\n        \t\t<label for=\"phone\">Phone:</label> <input [(ngModel)]=\"contact.phone\" type=\"text\">\n        \t</div>\n            <br><button (click)=\"onCreateNew()\">create contact from this contact</button>        \t       \t\n        </div>\n    ",
                        inputs: ["contact"],
                        styles: ["\n    \tlabel{\n    \t\tdisplay:inline-block;\n    \t\twidth:100px;\n    \t}\n    \tinput{\n    \t\twidth:250px;\n    \t}\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUdJLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRi9CLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBRVcsQ0FBQzs7Z0JBRXhDLHNDQUFXLEdBQVg7b0JBQ0ksd0ZBQXdGO29CQUN4RixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztnQkF2Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsU0FBUzt3QkFDaEIsUUFBUSxFQUFFLGd0QkFnQlQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNuQixNQUFNLEVBQUUsQ0FBQyxpSUFRUixDQUFDO3FCQUNMLENBQUM7O29DQUFBO2dCQVdGLHVCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwrQ0FTQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udGFjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgXHQ8ZGl2PlxuICAgICAgICBcdFx0PGxhYmVsIGZvcj1cImZpcnN0LW5hbWVcIj5GaXJzdCBOYW1lOjwvbGFiZWw+IDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QuZmlyc3ROYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgXHQ8ZGl2PlxuICAgICAgICBcdFx0PGxhYmVsIGZvcj1cImxhc3QtbmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPiA8aW5wdXQgWyhuZ01vZGVsKV09XCJjb250YWN0Lmxhc3ROYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgXHQ8ZGl2PlxuICAgICAgICBcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IFsobmdNb2RlbCldPVwiY29udGFjdC5lbWFpbFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIFx0PC9kaXY+XG4gICAgICAgIFx0PGRpdj5cbiAgICAgICAgXHRcdDxsYWJlbCBmb3I9XCJwaG9uZVwiPlBob25lOjwvbGFiZWw+IDxpbnB1dCBbKG5nTW9kZWwpXT1cImNvbnRhY3QucGhvbmVcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgPGJyPjxidXR0b24gKGNsaWNrKT1cIm9uQ3JlYXRlTmV3KClcIj5jcmVhdGUgY29udGFjdCBmcm9tIHRoaXMgY29udGFjdDwvYnV0dG9uPiAgICAgICAgXHQgICAgICAgXHRcbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBpbnB1dHM6IFtcImNvbnRhY3RcIl0sXG4gICAgc3R5bGVzOiBbYFxuICAgIFx0bGFiZWx7XG4gICAgXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIFx0XHR3aWR0aDoxMDBweDtcbiAgICBcdH1cbiAgICBcdGlucHV0e1xuICAgIFx0XHR3aWR0aDoyNTBweDtcbiAgICBcdH1cbiAgICBgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xuXHRwdWJsaWMgY29udGFjdDogQ29udGFjdCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9O1xuICAgIFxuICAgIG9uQ3JlYXRlTmV3KCl7XG4gICAgICAgIC8vdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdEZyb21Db250YWN0JywgeyBsYXN0TmFtZTogdGhpcy5jb250YWN0Lmxhc3ROYW1lIH1dKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdCcsIHsgbGFzdE5hbWU6IHRoaXMuY29udGFjdC5sYXN0TmFtZSB9XSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
