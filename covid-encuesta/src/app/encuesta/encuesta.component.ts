import { Component, OnInit } from '@angular/core';
import { Encuesta } from '../model/Encuesta';
import { Router } from '@angular/router';
import { ENCUESTAS } from '../model/encuestas';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  encuesta: Encuesta = {
    ciudad: 'Medellin',
    estratoSocial: 2,
    ingresoPromedio: 4.3,
    labora: true,
    nivelEducacion: 'Ninguno',
    nombrePersona: 'yeison',
    sigueProtocolos: true,
    sufreEstres: true
  };

  nivelesDeEducacion: string[] = [
    'Ninguno', 'Básico Primaria', 'Bachillerato',
    'Tecnológico', 'Universitario', 'Maestria', 'Doctorado'];

  listaEstratos: number[] = [0, 1, 2, 3, 4, 5, 6];
  selectedNivel = 'Ninguno';
  selectedEstrato = '0';


  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  enviarForm() {
    console.log(this.encuesta.nivelEducacion);
    this.generarObjeto();
    this.router.navigateByUrl('/encuestas-list');
  }

  generarObjeto() {
    ENCUESTAS.push(this.encuesta);
  }
}
