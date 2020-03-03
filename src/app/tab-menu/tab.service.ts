import { Injectable } from '@angular/core';
import { Tab } from './tab';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabList: Tab[] = [];
  nTabs = 0;

  public tabSub = new BehaviorSubject<Tab[]>(this.tabList);


  constructor() { }

  addTab(tab: Tab) {
    if (!this.isUnique(tab)) {
      for (let i = 0; i < this.tabList.length; i++) {
        if (this.tabList[i].active === true) {
          this.tabList[i].active = false;
        }
      }
      tab.id = this.nTabs;
      tab.active = true;
      tab.title += this.nTabs;
      tab.data += this.nTabs;
      this.tabList.push(tab);
      this.nTabs++;
      this.tabSub.next(this.tabList);
    } else {
    }
  }

  closeTab(index) {
    const removeIndex = this.tabList.findIndex(e => e.id == index);
    if (this.tabList.length > 0) {
      this.tabList[this.tabList.length - 1].active = true;
    }
    this.tabList.splice(removeIndex, 1);
    this.tabSub.next(this.tabList);
  }

  isUnique(tab: Tab) {
    if(tab.unique){
      return this.tabList.some(a => a.title == tab.title);
    } else {
      return false;
    }
  }

}
