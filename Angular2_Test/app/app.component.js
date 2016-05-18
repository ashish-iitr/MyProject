System.register(['angular2/core', './my-component.component', "./contacts/contact-list.component", "./contacts/new-contact.component", "angular2/router", "./http-test/http-test.component"], function(exports_1, context_1) {
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
    var core_1, my_component_component_1, contact_list_component_1, new_contact_component_1, router_1, router_2, http_test_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_component_component_1_1) {
                my_component_component_1 = my_component_component_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_test_component_1_1) {
                http_test_component_1 = http_test_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header>\n    \t\t<nav>\n    \t\t\t<a [routerLink]=\"['Contacts']\" >Contacts</a>\n    \t\t\t<a [routerLink]=\"['NewContact']\" >New Contact</a>\n    \t\t</nav>\n    \t</header>\n    \t<div class=\"main\">\n    \t\t<router-outlet></router-outlet>\n            <http-test></http-test>\n    \t</div>\n    ",
                        directives: [my_component_component_1.MyComponentComponent, contact_list_component_1.ContactListComponent, new_contact_component_1.NewContactComponent, router_1.ROUTER_DIRECTIVES, http_test_component_1.HTTPTestComponent],
                        styleUrls: ['src/css/mycomponent.css']
                    }),
                    router_2.RouteConfig([
                        { path: '/contacts', name: 'Contacts', component: contact_list_component_1.ContactListComponent, useAsDefault: true },
                        { path: '/newcontact', name: 'NewContact', component: new_contact_component_1.NewContactComponent },
                        { path: '/newcontact/:lastName', name: 'NewContactFromContact', component: new_contact_component_1.NewContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBekJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx5VEFXVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsRUFBRSwwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbkgsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBQ3pDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDNUYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO3dCQUNyRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO3FCQUN2RyxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtNeUNvbXBvbmVudENvbXBvbmVudH0gZnJvbSAnLi9teS1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7Q29udGFjdExpc3RDb21wb25lbnR9IGZyb20gXCIuL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7TmV3Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50XCJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7SFRUUFRlc3RDb21wb25lbnR9IGZyb20gXCIuL2h0dHAtdGVzdC9odHRwLXRlc3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGhlYWRlcj5cbiAgICBcdFx0PG5hdj5cbiAgICBcdFx0XHQ8YSBbcm91dGVyTGlua109XCJbJ0NvbnRhY3RzJ11cIiA+Q29udGFjdHM8L2E+XG4gICAgXHRcdFx0PGEgW3JvdXRlckxpbmtdPVwiWydOZXdDb250YWN0J11cIiA+TmV3IENvbnRhY3Q8L2E+XG4gICAgXHRcdDwvbmF2PlxuICAgIFx0PC9oZWFkZXI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgIFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8aHR0cC10ZXN0PjwvaHR0cC10ZXN0PlxuICAgIFx0PC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTXlDb21wb25lbnRDb21wb25lbnQsIENvbnRhY3RMaXN0Q29tcG9uZW50LCBOZXdDb250YWN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgSFRUUFRlc3RDb21wb25lbnRdLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuXG5AUm91dGVDb25maWcoW1xuXHRcdHsgcGF0aDogJy9jb250YWN0cycsIG5hbWU6ICdDb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdExpc3RDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuXHRcdHsgcGF0aDogJy9uZXdjb250YWN0JywgbmFtZTogJ05ld0NvbnRhY3QnLCBjb21wb25lbnQ6IE5ld0NvbnRhY3RDb21wb25lbnQgfSxcbiAgICAgICAgeyBwYXRoOiAnL25ld2NvbnRhY3QvOmxhc3ROYW1lJywgbmFtZTogJ05ld0NvbnRhY3RGcm9tQ29udGFjdCcsIGNvbXBvbmVudDogTmV3Q29udGFjdENvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
