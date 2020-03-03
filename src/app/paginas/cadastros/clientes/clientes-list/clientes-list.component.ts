import { Component, OnInit, OnChanges, ElementRef, ViewChild, Input } from '@angular/core';
import { Clientes } from '../clientes';
import { BackendService } from 'src/app/paginas/commons/backend/backend-cliente.service';
import { SimpleChanges } from '@angular/core';
import { ListRowClickEvent } from 'src/app/components/list/list.types';
import { FormDataChange } from 'src/app/components/form/form.types';
import { Menu } from 'src/app/components/menu/menu';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  @ViewChild('nombre', {static: false}) nombreEl: ElementRef;

  @Input() data;

  clientes: Clientes[] = [];
  columnas: string[] = ['ID', 'Nombre', 'Apellido', 'Teléfono'];
  campos: string[] = ['id', 'nombre', 'apellido', 'telefono'];
  opened = false;
  selectedCliente = new Clientes();
  editable = false;

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {

  }

  onRowClicked(e: ListRowClickEvent){
    this.opened = e.isRowClicked;
    this.selectedCliente = e.entity as Clientes;
  }

  onDataChange(e: FormDataChange){
    this.opened = e.opened;
  }

  onStatusChange(status: boolean){
    this.editable = status;
    console.log(status);
  }

}
