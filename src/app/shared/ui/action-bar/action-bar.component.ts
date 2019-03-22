import { Component, OnInit, Input } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';

declare let android: any;

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {

  @Input() title: string;

  constructor(private page: Page,
              private router: RouterExtensions) { }

  ngOnInit() {
  }

  get canGoBack(){
    return this.router.canGoBack();
  }

  onGoBack(){
    this.router.backToPreviousPage();
  }

  onCarregarActionBar(){
    if(isAndroid){
        const androidToolBar = this.page.actionBar.nativeView;
        const backButton = androidToolBar.getNavigationIcon();
        if(backButton){
            backButton.setColorFilter(android.graphics.Color.parseColor('#171717'),
            (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
        }
    }
}

}
