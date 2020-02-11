import { Component, OnInit } from '@angular/core';
import { Proprietarios } from '../proprietarios';
import { BackendProprietariosService } from 'src/app/paginas/commons/backend/backend-proprietarios.service';

@Component({
  selector: 'app-proprietarios-list',
  templateUrl: './proprietarios-list.component.html',
  styleUrls: ['./proprietarios-list.component.scss']
})
export class ProprietariosListComponent implements OnInit {

  proprietarios: Proprietarios[] = [];

  constructor(
    private backend: BackendProprietariosService
  ) { }

  ngOnInit() {
    this.backend.getAll().subscribe
    (
      proprietarios => this.proprietarios = proprietarios,
      error => alert("Error al cargar la lista")
    )
  }

}
