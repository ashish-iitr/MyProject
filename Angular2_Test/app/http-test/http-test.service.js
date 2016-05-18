System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getCurrentTime = function () {
                    return this._http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ var1: 'test', var2: 3 });
                    var param = 'json=' + json;
                    var headers = new http_2.Headers();
                    headers.append('Content-type', 'application/x-www-form-urlencoded');
                    return this._http.post(' http://validate.jsontest.com', param, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC9odHRwLXRlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQ0MseUJBQW9CLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyx3Q0FBYyxHQUFkO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQzt5QkFDL0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3JELElBQUksS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQzNCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLEVBQUU7d0JBQzlELE9BQU8sRUFBRSxPQUFPO3FCQUNoQixDQUFDO3lCQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFuQkY7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBb0JiLHNCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCw2Q0FrQkMsQ0FBQSIsImZpbGUiOiJodHRwLXRlc3QvaHR0cC10ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhUVFBUZXN0U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApeyB9XG5cblx0Z2V0Q3VycmVudFRpbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vZGF0ZS5qc29udGVzdC5jb20nKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHRwb3N0SlNPTigpIHtcblx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHsgdmFyMTogJ3Rlc3QnLCB2YXIyOiAzIH0pO1xuXHRcdHZhciBwYXJhbSA9ICdqc29uPScgKyBqc29uO1xuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoJyBodHRwOi8vdmFsaWRhdGUuanNvbnRlc3QuY29tJywgcGFyYW0sIHtcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnNcblx0XHR9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
