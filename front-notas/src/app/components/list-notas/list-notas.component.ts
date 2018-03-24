import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../services/notas.service';
import { Nota } from '../../model/nota';
import { log } from 'util';

@Component({
  selector: 'app-list-notas',
  templateUrl: './list-notas.component.html',
  styleUrls: ['./list-notas.component.css']
})
export class ListNotasComponent implements OnInit {

  notas: Nota[];
  constructor(private notasService: NotasService) { }

  ngOnInit() {
    this.getNotas();
  }

  getNotas(): void {
    this.notasService.getNotas()
      .subscribe(notas => this.notas = notas);
  }

}
