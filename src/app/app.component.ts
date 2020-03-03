import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collapsed = false;
  open = true;
  title = 'terra';
  isSideBar: boolean = false;

  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setDropDownHorientation()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setDropDownHorientation();
  }

  setDropDownHorientation(): void {
    if (this.innerWidth <= 768) {
      this.isSideBar = true;
    } else {
      this.isSideBar = false;
    }
  }
}
