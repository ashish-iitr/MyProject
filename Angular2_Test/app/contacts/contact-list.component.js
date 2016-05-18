System.register(["angular2/core", "./contact.component", "./contact.service"], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContact().then(function (contact) { return _this.contacts = contact; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n\t\t<ul>\n        \t<li *ngFor=\"#contact of contacts\"\n        \t(click)=\"onSelect(contact)\" \n        \t[class.clicked]=\"selectedContact === contact\">{{contact.firstName}} {{contact.lastName}}</li>\n        </ul>\n        <contact *ngIf=\"selectedContact !== null\" [contact]=\"selectedContact\"></contact>\n\t",
                        directives: [contact_component_1.ContactComponent],
                        styleUrls: ['src/css/mycomponent.css'],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBR0MsOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBRDVDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUN3QixDQUFDO2dCQUN2RCx1Q0FBUSxHQUFSLFVBQVMsT0FBTztvQkFDZixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCwwQ0FBVyxHQUFYO29CQUFBLGlCQUVDO29CQURBLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUUsT0FBa0IsSUFBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBQ0QsdUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBM0JGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxpVUFPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzNCLENBQUM7O3dDQUFBO2dCQWVGLDJCQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCx1REFhQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGFjdFNlcnZpY2V9IGZyb20gXCIuL2NvbnRhY3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250YWN0LWxpc3QnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDx1bD5cbiAgICAgICAgXHQ8bGkgKm5nRm9yPVwiI2NvbnRhY3Qgb2YgY29udGFjdHNcIlxuICAgICAgICBcdChjbGljayk9XCJvblNlbGVjdChjb250YWN0KVwiIFxuICAgICAgICBcdFtjbGFzcy5jbGlja2VkXT1cInNlbGVjdGVkQ29udGFjdCA9PT0gY29udGFjdFwiPnt7Y29udGFjdC5maXJzdE5hbWV9fSB7e2NvbnRhY3QubGFzdE5hbWV9fTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxjb250YWN0ICpuZ0lmPVwic2VsZWN0ZWRDb250YWN0ICE9PSBudWxsXCIgW2NvbnRhY3RdPVwic2VsZWN0ZWRDb250YWN0XCI+PC9jb250YWN0PlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbQ29udGFjdENvbXBvbmVudF0sXG5cdHN0eWxlVXJsczogWydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddLFxuXHRwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBjb250YWN0czogQ29udGFjdFtdO1xuXHRwdWJsaWMgc2VsZWN0ZWRDb250YWN0ID0gbnVsbDtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKSB7fVxuXHRvblNlbGVjdChjb250YWN0KSB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0O1xuXHR9XG5cdGdldENvbnRhY3RzKCl7XG5cdFx0dGhpcy5fY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdCgpLnRoZW4oKCBjb250YWN0OiBDb250YWN0W10gKSA9PiB0aGlzLmNvbnRhY3RzID0gY29udGFjdCk7XG5cdH1cblx0bmdPbkluaXQoKTphbnl7XG5cdFx0dGhpcy5nZXRDb250YWN0cygpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
