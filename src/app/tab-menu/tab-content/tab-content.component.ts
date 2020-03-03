import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Tab } from '../tab';
import { ContentContainerDirective } from '../content-container.directive';
import { SkeletonComponent } from '../skeleton-component';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @ViewChild(ContentContainerDirective, { static: true })

  @Input()
  tab;

  contentContainer: ContentContainerDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {

    const tab: Tab = this.tab;
    console.log(tab, this.contentContainer)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.component);
    const viewContainerRef = this.contentContainer.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as SkeletonComponent).data = tab.data;

  }



}
