import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UIService {

    private _drawerState = new BehaviorSubject<boolean>(false);

    get drawerState(){
        return this._drawerState.asObservable();
    }

    toggleDrawer(){
        this._drawerState.next(true);
    }
}