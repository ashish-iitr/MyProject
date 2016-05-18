System.register(["angular2/core", "./mock-contact"], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContact = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQVFBLENBQUM7Z0JBUEEsbUNBQVUsR0FBVjtvQkFDQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBUSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQVRGO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVViLHFCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwyQ0FRQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q09OVEFDVFN9IGZyb20gXCIuL21vY2stY29udGFjdFwiO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNlIHtcblx0Z2V0Q29udGFjdCgpe1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpO1xuXHR9XG5cblx0aW5zZXJ0Q29udGFjdChjb250YWN0OiBDb250YWN0KSB7XG5cdFx0UHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKS50aGVuKChjb250YWN0czogQ29udGFjdFtdKSA9PiBjb250YWN0cy5wdXNoKGNvbnRhY3QpKTtcblx0fVx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
