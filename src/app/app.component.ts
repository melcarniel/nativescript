import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { UIService } from "./shared/ui/action-bar/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    private drawerSub: Subscription
    private drawer: RadSideDrawer

    constructor(private uiService: UIService,
                private changeDetectionRef: ChangeDetectorRef){

    }

    ngOnInit(){
        this.drawerSub = this.uiService.drawerState.subscribe(()=>{
            if(this.drawer){
                this.drawer.toggleDrawerState();
            }
            
        });

    }

    ngAfterViewInit(){
        this.drawer = this.drawerComponent.sideDrawer        
        this.changeDetectionRef.detectChanges()
    }

    ngOnDestroy(){
        if(this.drawerSub){
            this.drawerSub.unsubscribe();
        }
    }

    onLogout(){
        this.drawer.toggleDrawerState();
    }
 }
