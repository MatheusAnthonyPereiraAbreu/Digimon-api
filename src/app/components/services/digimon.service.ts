import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { environment } from '../../../environments/environment';
;
//Ajsuar a promise.
@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  constructor(private http: HttpClient, //colocar o enviroments aq;
  ) { }
  private url = environment.apiUrl;
  private urlDigimon: string = `${this.url}/api/digimon`;
  private urlName: string = `${this.url}/api/digimon/name/`;
  private urlLevel: string = `${this.url}/api/digimon/level/`;

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

  // public async getAllDigimon() {
  //   const digiArray = await this.DigiApi();

  //   return digiArray;
  // };

  public getAllDigimon() {
    return from(this.DigiApi());
  }

  // public async findDigimonName(value: string): Promise<any> {
  //   try {
  //     if(value == ''){
  //       const digiArray = await this.DigiApi();
  //       return digiArray;
  //     }
  //     const name = await this.apiGetDigimons(`${this.urlName}${value.toLocaleLowerCase()}`).toPromise();
  //     return name;
  //   } catch (error) {
  //     console.error('Nome de digimon, não encontrado!', error);
  //     throw error;
  //   }
  // }

  public findDigimonName(value: string) {
    if (value == '') {
      return from(this.DigiApi());
    }
    return this.apiGetDigimons(`${this.urlName}${value.toLocaleLowerCase()}`);
  }

  // public async findDigimonLevel(value: string) {
  //   try {
  //     if (value == "All") {
  //       const digiArray = await this.DigiApi();
  //       return digiArray;
  //     }
  //     const level = await this.apiGetDigimons(`${this.urlLevel}${value.toLocaleLowerCase()}`).toPromise();
  //     return level;
  //   } catch (error) {
  //     console.error('Level não encontrado!', error);
  //     throw error;
  //   }
  // }

  public findDigimonLevel(value: string) {
    if(value == "All"){
      return from(this.DigiApi());
    }
    return this.apiGetDigimons(`${this.urlLevel}${value.toLocaleLowerCase()}`);
  }


}