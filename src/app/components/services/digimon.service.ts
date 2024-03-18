import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  constructor(private http: HttpClient) { }
  private urlDigimon: string = 'https://digimon-api.vercel.app/api/digimon';
  private urlName: string = 'https://digimon-api.vercel.app/api/digimon/name/';
  private urlLevel: string = 'https://digimon-api.vercel.app/api/digimon/level/';

  private DigiApi = async () => {
    const api = fetch(this.urlDigimon)
      .then((res) => res.json())
      .then((data) => data);

    return api;
  }

  private apiGetDigimons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
        )
    )
  }

  public async getAllDigimon() {
    const digiArray = await this.DigiApi();
    return digiArray;
  };

  public async findDigimonName(value: string): Promise<any> {
    try {
      if(value == ''){
        const digiArray = await this.DigiApi();
        return digiArray;
      }
      const name = await this.apiGetDigimons(`${this.urlName}${value.toLocaleLowerCase()}`).toPromise();
      return name;
    } catch (error) {
      console.error('Nome de digimon, não encontrado!', error);
      throw error;
    }
  }

  public async findDigimonLevel(value:string) {
    try {
      if(value == "All"){
        const digiArray = await this.DigiApi();
        return digiArray;
      }
      const level = await this.apiGetDigimons(`${this.urlLevel}${value.toLocaleLowerCase()}`).toPromise();
      return level;
    } catch (error) {
      console.error('Level não encontrado!', error);
      throw error;
    }
  }


}