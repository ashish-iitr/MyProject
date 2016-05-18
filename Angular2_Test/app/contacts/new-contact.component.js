System.register(["angular2/core", "./contact.service", "angular2/router", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1, router_2, common_1, common_2;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams, _formBuilder) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._formBuilder = _formBuilder;
                }
                NewContactComponent.prototype.onSubmit = function (value) {
                    //this._contactService.insertContact(this.newContact);
                    this._contactService.insertContact(this.myForm.value);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    //this.newContact = { lastName: this._routeParams.get('lastName') };
                    this.myForm = this._formBuilder.group({
                        'firstName': ['', common_2.Validators.required],
                        'lastName': [this._routeParams.get('lastName'), common_2.Validators.required],
                        'email': ['', common_2.Validators.required],
                        'phone': ['', common_2.Validators.required]
                    });
                };
                NewContactComponent = __decorate([
                    core_1.Component({
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
                        template: "\n    <br>create new contact<br><br>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n            <div>\n                <label for=\"first-name\">First Name:</label> \n                <input type=\"text\" id=\"first-name\" [ngFormControl]=\"myForm.controls['firstName']\"\n                #firstName=\"ngForm\">\n                <span *ngIf=!firstName.valid>Not Valid</span>\n            </div>\n            <div>\n                <label for=\"last-name\">Last Name:</label> \n                <input type=\"text\" id=\"last-name\" [ngFormControl]=\"myForm.controls['lastName']\">\n            </div>\n            <div>\n                <label for=\"email\">Email:</label> \n                <input type=\"text\" id=\"email\" [ngFormControl]=\"myForm.controls['email']\">\n            </div>\n            <div>\n                <label for=\"phone\">Phone:</label> \n                <input type=\"text\" id=\"phone\" [ngFormControl]=\"myForm.controls['phone']\">\n            </div> \n            <div>\n                <button type=\"submit\" [disabled]=\"!myForm.valid\"> New Contact</button>\n            </div>                     \n        </form>\n    ",
                        providers: [contact_service_1.ContactService],
                        styles: ["\n    \tlabel{\n    \t\tdisplay:inline-block;\n    \t\twidth:100px;\n    \t}\n    \tinput{\n    \t\twidth:250px;\n    \t}\n        .ng-invalid{\n            border: 1px solid red;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_2.RouteParams, common_1.FormBuilder])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUZBO2dCQU1JLDZCQUFvQixlQUErQixFQUFVLE9BQWUsRUFDaEUsWUFBeUIsRUFBVSxZQUF5QjtvQkFEcEQsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2hFLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFJLENBQUM7Z0JBRTdFLHNDQUFRLEdBQVIsVUFBUyxLQUFLO29CQUNWLHNEQUFzRDtvQkFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0ksb0VBQW9FO29CQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNwRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDckMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBNUZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGFBQWE7d0JBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXlCSzt3QkFDSixRQUFRLEVBQUUscXFDQXlCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixNQUFNLEVBQUUsQ0FBQyxzTUFXUixDQUFDO3FCQUNMLENBQUM7O3VDQUFBO2dCQTBCRiwwQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQscURBd0JDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuXG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIm5ldy1jb250YWN0XCIsXG4gICAvKiB0ZW1wbGF0ZTogYFxuICAgIDxicj5jcmVhdGUgbmV3IGNvbnRhY3Q8YnI+PGJyPlxuICAgICAgICA8Zm9ybSAjbXlGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgXHQ8ZGl2PlxuICAgICAgICBcdFx0PGxhYmVsIGZvcj1cImZpcnN0LW5hbWVcIj5GaXJzdCBOYW1lOjwvbGFiZWw+IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3QtbmFtZVwiIG5nQ29udHJvbD1cImZpcnN0TmFtZVwiIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5maXJzdE5hbWVcIiBcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAjZmlyc3ROYW1lPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZmlyc3ROYW1lLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgICAgICBcdDwvZGl2PlxuICAgICAgICBcdDxkaXY+XG4gICAgICAgIFx0XHQ8bGFiZWwgZm9yPVwibGFzdC1uYW1lXCI+TGFzdCBOYW1lOjwvbGFiZWw+IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdC1uYW1lXCIgbmdDb250cm9sPVwibGFzdE5hbWVcIiBbKG5nTW9kZWwpXT1cIm5ld0NvbnRhY3QubGFzdE5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgXHQ8ZGl2PlxuICAgICAgICBcdFx0PGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD4gXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5nQ29udHJvbD1cImVtYWlsXCIgWyhuZ01vZGVsKV09XCJuZXdDb250YWN0LmVtYWlsXCIgcmVxdWlyZWQ+XG4gICAgICAgIFx0PC9kaXY+XG4gICAgICAgIFx0PGRpdj5cbiAgICAgICAgXHRcdDxsYWJlbCBmb3I9XCJwaG9uZVwiPlBob25lOjwvbGFiZWw+IFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIiBuZ0NvbnRyb2w9XCJwaG9uZVwiIFsobmdNb2RlbCldPVwibmV3Q29udGFjdC5waG9uZVwiIHJlcXVpcmVkPlxuICAgICAgICBcdDwvZGl2PiBcbiAgICAgICAgXHQ8ZGl2PlxuICAgICAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0uZm9ybS52YWxpZFwiID4gTmV3IENvbnRhY3Q8L2J1dHRvbj5cbiAgICAgICAgXHQ8L2Rpdj4gICAgICBcdCAgICAgICBcdFxuICAgICAgICA8L2Zvcm0+XG4gICAgYCwqL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgPGJyPmNyZWF0ZSBuZXcgY29udGFjdDxicj48YnI+XG4gICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQobXlGb3JtLnZhbHVlKVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPkZpcnN0IE5hbWU6PC9sYWJlbD4gXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdC1uYW1lXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydmaXJzdE5hbWUnXVwiXG4gICAgICAgICAgICAgICAgI2ZpcnN0TmFtZT1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPSFmaXJzdE5hbWUudmFsaWQ+Tm90IFZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0LW5hbWVcIj5MYXN0IE5hbWU6PC9sYWJlbD4gXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0LW5hbWVcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2xhc3ROYW1lJ11cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPiBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydlbWFpbCddXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmU6PC9sYWJlbD4gXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1sncGhvbmUnXVwiPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPiBOZXcgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgXHRsYWJlbHtcbiAgICBcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgXHRcdHdpZHRoOjEwMHB4O1xuICAgIFx0fVxuICAgIFx0aW5wdXR7XG4gICAgXHRcdHdpZHRoOjI1MHB4O1xuICAgIFx0fVxuICAgICAgICAubmctaW52YWxpZHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxue1xuXG4gICAgbmV3Q29udGFjdDogQ29udGFjdDtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikgeyB9XG5cbiAgICBvblN1Ym1pdCh2YWx1ZSl7XG4gICAgICAgIC8vdGhpcy5fY29udGFjdFNlcnZpY2UuaW5zZXJ0Q29udGFjdCh0aGlzLm5ld0NvbnRhY3QpO1xuICAgICAgICB0aGlzLl9jb250YWN0U2VydmljZS5pbnNlcnRDb250YWN0KHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ29udGFjdHMnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIC8vdGhpcy5uZXdDb250YWN0ID0geyBsYXN0TmFtZTogdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsYXN0TmFtZScpIH07XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2ZpcnN0TmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnbGFzdE5hbWUnOiBbdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsYXN0TmFtZScpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAncGhvbmUnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
