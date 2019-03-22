import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {

    enteredChallenge:string[] = [];

    onChallengeInput(event: string){
        this.enteredChallenge.push(event)
    }
 }
