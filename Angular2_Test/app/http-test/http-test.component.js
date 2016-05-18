System.register(['angular2/core', "./http-test.service"], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HTTPTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpService.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HTTPTestComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpService.postJSON()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n    \t<br><button (click)=\"onTestGet()\">Test Get Request</button>\n    \t<p>Output: {{getData}}</p>\n    \t<button (click)=\"onTestPost()\">Test Post Request</button><br>\n    \t<p>Output: {{postData}}</p>\n    ",
                        providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC9odHRwLXRlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUMsMkJBQW9CLFlBQTZCO29CQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7Z0JBQUksQ0FBQztnQkFFdEQscUNBQVMsR0FBVDtvQkFBQSxpQkFPQztvQkFOQSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTt5QkFDaEMsU0FBUyxDQUNULFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUMzQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUM3QixDQUFDO2dCQUNKLENBQUM7Z0JBQ0Qsc0NBQVUsR0FBVjtvQkFBQSxpQkFPQztvQkFOQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDMUIsU0FBUyxDQUNULFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBWixDQUFZLEVBQ3JCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUM3QixDQUFDO2dCQUNKLENBQUM7Z0JBaENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSx5TkFLVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO3FCQUMvQixDQUFDOztxQ0FBQTtnQkF5QkYsd0JBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELGlEQXVCQyxDQUFBIiwiZmlsZSI6Imh0dHAtdGVzdC9odHRwLXRlc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIVFRQVGVzdFNlcnZpY2V9IGZyb20gXCIuL2h0dHAtdGVzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaHR0cC10ZXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGJyPjxidXR0b24gKGNsaWNrKT1cIm9uVGVzdEdldCgpXCI+VGVzdCBHZXQgUmVxdWVzdDwvYnV0dG9uPlxuICAgIFx0PHA+T3V0cHV0OiB7e2dldERhdGF9fTwvcD5cbiAgICBcdDxidXR0b24gKGNsaWNrKT1cIm9uVGVzdFBvc3QoKVwiPlRlc3QgUG9zdCBSZXF1ZXN0PC9idXR0b24+PGJyPlxuICAgIFx0PHA+T3V0cHV0OiB7e3Bvc3REYXRhfX08L3A+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtIVFRQVGVzdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgSFRUUFRlc3RDb21wb25lbnQge1xuXHRnZXREYXRhOiBTdHJpbmc7XG5cdHBvc3REYXRhOiBTdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBUZXN0U2VydmljZSkgeyB9XG5cblx0b25UZXN0R2V0KCl7XG5cdFx0dGhpcy5faHR0cFNlcnZpY2UuZ2V0Q3VycmVudFRpbWUoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB0aGlzLmdldERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRcdFx0ZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaGVkXCIpXG5cdFx0XHQpO1xuXHR9XG5cdG9uVGVzdFBvc3QoKXtcblx0XHR0aGlzLl9odHRwU2VydmljZS5wb3N0SlNPTigpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRcdFx0ZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuXHRcdFx0XHQoKSA9PiBjb25zb2xlLmxvZyhcImZpbmlzaGVkXCIpXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
