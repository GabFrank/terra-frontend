import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ListRowClickEvent } from './list.types';
import { BackendService } from 'src/app/paginas/commons/backend/backend-cliente.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  titulo = 'Título';

  @Input()
  columnList: string[] = [];

  @Input()
  fieldList: string[] = [];

  @Input()
  dataRowTemplate: TemplateRef<any>;

  @Input()
  resources: string;

  @Output()
  rowClicked = new EventEmitter<ListRowClickEvent>();

  dataList;

  opened = false;
  editable = false;
  editSaveBtn = 'Editar';
  isAlertClosed = true;
  alertType = '';
  alertText = '';
  submitted = false;
  entities: any[];

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  onTableClick(e, entity) {
    this.opened = true;
    this.rowClicked.emit(new ListRowClickEvent(entity, this.opened));
  }

  handleNew() {
    // this.opened = true;
    // this.editable = true;
    // this.selectedCliente = new Clientes();
    // this.editSaveBtn = 'Guardar';
    // setTimeout(() => {
    //   this.nombreEl.nativeElement.focus();
    // }, 0);

  }

  cargarLista(){
    this.backend.getAll().subscribe
    (
      entityList => this.entities = entityList,
      error => alert("Error al cargar la lista")
    )
  }


}
