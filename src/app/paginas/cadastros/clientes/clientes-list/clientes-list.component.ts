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

}
