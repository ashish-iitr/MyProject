import {Component} from 'angular2/core';
import {HTTPTestService} from "./http-test.service";

@Component({
    selector: 'http-test',
    template: `
    	<br><button (click)="onTestGet()">Test Get Request</button>
    	<p>Output: {{getData}}</p>
    	<button (click)="onTestPost()">Test Post Request</button><br>
    	<p>Output: {{postData}}</p>
    `,
    providers: [HTTPTestService]
})

export class HTTPTestComponent {
	getData: String;
	postData: String;

	constructor(private _httpService: HTTPTestService) { }

	onTestGet(){
		this._httpService.getCurrentTime()
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => alert(error),
				() => console.log("finished")
			);
	}
	onTestPost(){
		this._httpService.postJSON()
			.subscribe(
				data => this.postData = JSON.stringify(data),
				error => alert(error),
				() => console.log("finished")
			);
	}

}
