import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Tab } from './tab';
import { TabService } from './tab.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit, OnChanges {

  tabList: Tab[];
  selectedIndex = 0;

  constructor(
    private service: TabService
  ) { }

  ngOnInit() {
    this.service.tabSub.subscribe(tabs => {
    this.tabList = tabs;
    });}

  closeTab(e){
      this.service.closeTab(e.target.id);
  }

  focusChange(e){
    console.log(e)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
