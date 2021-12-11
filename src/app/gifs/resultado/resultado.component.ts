import { GifsService } from './../services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',

})
export class ResultadoComponent  {

  constructor(private gifsService:GifsService) { }

  get resultados(){
   return  this.gifsService.resultado;
  }
  ngOnInit(): void {
  }

}
