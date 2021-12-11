import { GifsService } from './../services/gifs.service';
import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent  {


@ViewChild("textBuscar")textBuscar!:ElementRef<HTMLInputElement> // el viewchild buscar una referencia en el html en este caso nuestra referencia es #textBuscar(en el html!!!! ojo no aca )

buscar(){

  const valor=this.textBuscar.nativeElement.value
  if (valor.trim().length===0) {
    return;
  }
  console.log(valor)
  this._gifsService.buscarGifs(valor)
  this.textBuscar.nativeElement.value=""

}
  constructor(private _gifsService:GifsService) { }

  ngOnInit(): void {
  }

}
