import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  constructor(private http: HttpClient) { }
  private urlDigimon:string = 'https://digimon-api.vercel.app/api/digimon';
  private urlName:string = 'https://digimon-api.vercel.app/api/digimon/name/';
  private urlLevel:string = 'https://digimon-api.vercel.app/api/digimon/level/';

  private DigiApi = async () => {
    const api = fetch(this.urlDigimon)
    .then((res) => res.json())
    .then((data)=> data);

    return api;
  }

  public apiGetDigimons(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res=> res
      )
    )
  }

  public async getAllDigimon() {
    const digiArray = await this.DigiApi();
    console.log(digiArray);
  };

  public async findDigimonName(value:string){
    const digiArray = await this.DigiApi();

    // const find = digiArray.find((digimon:any)=>digimon.name.toLowerCase() === value.toLowerCase());

    const find = this.apiGetDigimons(`${this.urlDigimon}/${value}`);

    console.log(find);
  }

  public async findDigimonLevel(value:string){
    const digiArray = await this.DigiApi();

    const find = digiArray.find((digimon:any)=>digimon.level.toLowerCase() === value.toLowerCase());

    if (!find) return alert('Level não encontrado')
    else return alert('DEU CERTO !!!');
  }


}