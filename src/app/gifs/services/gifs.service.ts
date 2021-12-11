import { GifsAplicacion,gif } from './../interfaces/gifs.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http:HttpClient){

  }
  private _historial: string[] = [];
  private apiKey:string="5iz2vv9hDWwRVYS5S5pIs8rAhiNUhEX4"
  public resultado: gif[]=[]

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query=query.trim().toLowerCase()
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10)
    }
     // metodo unshift insertar los datos en las primeras filas
this.http.get<GifsAplicacion>(`https://api.giphy.com/v1/gifs/search?api_key=5iz2vv9hDWwRVYS5S5pIs8rAhiNUhEX4&q=${query}&limit=10`)
.subscribe((resp)=>{
  console.log(resp.data)
   this.resultado=resp.data
})
  }
}
