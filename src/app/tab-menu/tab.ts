import { Type } from '@angular/core';

export class Tab {
  public id: number;
  public title: string;
  public data: any;
  public unique: boolean;
  public active: boolean = true;
  public component: Type<any>;
  constructor(component: Type<any>, title: string, tabData: any, unique: boolean){
    this.component = component;
    this.title = title;
    this.data = tabData;
    this.unique = unique;
  }
}

