import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import { BackendService } from 'src/app/paginas/commons/backend/backend-cliente.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Clientes[] = [];
  opened: boolean = false;
  selectedCliente = new Clientes();
  editable: boolean = false;
  editSaveBtn: string = "Editar";
  isAlertClosed: boolean = true;
  alertType = "";
  alertText = "";

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.backend.getAll().subscribe
    (
      clientes => this.clientes = clientes,
      error => alert("Error al cargar la lista")
    )
  }

  onClick(e, cliente){
    this.opened = true;
    this.selectedCliente = cliente;
    console.log(this.selectedCliente)
  }

  onEditar(){
    if(!this.editable){
      this.editSaveBtn = "Guardar";
      this.editable = true;
    } else {
      this.onSave();
      this.editSaveBtn = "Editar"
      this.editable = false;
    }
  }

  onSave(){
    this.backend.create(this.selectedCliente).subscribe(
      (val) => {
          this.alertType = 'success';
          this.alertText = "Guardado con éxito";
          this.isAlertClosed = false;
          setTimeout(()=>{
            this.isAlertClosed = true;
        }, 2000);
      },
      response => {
        this.alertType = 'danger';
        this.alertText = "Problema al guardar";
        this.isAlertClosed = false;
        setTimeout(()=>{
          this.isAlertClosed = true;
      }, 5000);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  onCancel(){
    this.opened = false;
    if(this.editable){
      this.editable = false;
      this.editSaveBtn = "Editar"
    } else {
      this.editSaveBtn = "Editar"
    }
  }

}
