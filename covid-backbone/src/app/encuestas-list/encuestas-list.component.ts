import { ENCUESTAS } from './../model/enuesta-mock';
import { Encuesta } from './../model/Encuesta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuestas-list',
  templateUrl: './encuestas-list.component.html',
  styleUrls: ['./encuestas-list.component.css']
})
export class EncuestasListComponent implements OnInit {

  encuestas = ENCUESTAS;
  titulosColumnas: string[] = [
    'Nro', 'Nombre', 'Ciudad', 'Sufre estrés por cuarentena', 'Nivel de duacion', 'Ingresos promedio', 'Estrato',
    'Sigue protocolos', 'Labora'];

  constructor() { }

  ngOnInit(): void {
  }

}
