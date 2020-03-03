import { Component, OnInit } from '@angular/core';
import { TabService } from '../../tab-menu/tab.service';
import { Tab } from '../../tab-menu/tab';
import { ClientesListComponent } from 'src/app/paginas/cadastros/clientes/clientes-list/clientes-list.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  collapsed: boolean = true;

  constructor(
    private tabService: TabService,
  ) { }

  ngOnInit() {
  }

  menuItems = [
    {
      level : 1,
      routerLink: "./mapa",
      icon: "map",
      id: "mapa",
      titulo: "Mapa"
    },
    {
      level : 1,
      routerLink: "./cadastros",
      icon: "pencil",
      titulo: "Registrar",
      id: "registrar",
      childrens: [
        {
          level: 2,
          routerLink: "./cadastros/clientes",
          icon: "user",
          id: "clientes",
          titulo: "Clientes",
        }
      ]
    },

  ]

  onChange(e){
  }

  onClick(e){
    const target = e.target.innerText;
    switch (target) {
      case 'Clientes':
        this.tabService.addTab(new Tab(ClientesListComponent, 'Clientes', null, true));
      break;

      default:
        console.log('fail')
        break;
    }
  }

}
