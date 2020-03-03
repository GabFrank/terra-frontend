import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, ContentChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import { FormDataChange, estados } from './form.types';
import { BackendService } from 'src/app/paginas/commons/backend/backend-cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  titulo = '';

  @Input()
  opened = false;

  @Input()
  entity: any = undefined;

  @Output()
  dataChange = new EventEmitter<FormDataChange>();

  @Output()
  statusChange = new EventEmitter<boolean>();

  @ContentChild('formTemplate', {static: false})
  formTemplateRef: TemplateRef<any>;

  isAlertClosed = true;
  alertType = '';
  alertText = '';
  data: any;
  estado: string;
  editable = false;


  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.setStates(estados.CLOSED);
  }

  onCancel(){
    this.setStates(estados.VIEWFORM);
  }

  onEditar(){
    this.setStates(estados.EDITFORM);
  }

  onGuardar(){
    this.setStates(estados.SAVEFORM);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.entity){
      this.data = changes.entity.currentValue;
    }
    this.dataChange.emit(new FormDataChange(changes, this.data, this.opened, this.estado));
  }

  onChangeModal(changes: SimpleChanges){
    if(!this.opened){
      this.setStates(estados.CLOSED);
    }
  }

  onSave() {
    this.backend.create(this.entity).subscribe(
      (val) => {
        this.alertType = 'success';
        this.alertText = 'Guardado con éxito';
        this.isAlertClosed = false;
        setTimeout(() => {
          this.isAlertClosed = true;
        }, 2000);
      },
      response => {
        this.alertType = 'danger';
        this.alertText = 'Problema al guardar';
        this.isAlertClosed = false;
        setTimeout(() => {
          this.isAlertClosed = true;
        }, 5000);
      },
      () => {
        console.log('Éxito.');
      });
  }

  setStates(estado: string){
    this.estado = estado;
    switch (estado) {
      case estados.CLOSED:
        this.opened = false;
        this.editable = false;
        this.statusChange.emit(this.editable);
        console.log('Estado:', estado);
        break;
      case estados.VIEWFORM:
        this.opened = true;
        this.editable = false;
        this.statusChange.emit(this.editable);
        console.log('Estado:', estado);
        break;
      case estados.EDITFORM:
        this.editable = false;
        this.statusChange.emit(this.editable);
        console.log('Estado:', estado);
        break;
      case estados.SAVEFORM:
        this.editable = true;
        this.statusChange.emit(this.editable);
        console.log('Estado:', estado);
        break;
      default:
        console.log('default case');
        break;
    }
  }

}
