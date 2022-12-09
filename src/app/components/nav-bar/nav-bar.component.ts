import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
   toggleControl = this.appComponent.toggleControl
  // @HostBinding('class') className = '';

  constructor(
    private appComponent: AppComponent
  ) { }


  ngOnInit(): void {
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'darkMode';
    //   this.className = darkMode ? darkClassName : '';
    // });
}

  public logout(): void {
    // LOGOUT
  }
}
