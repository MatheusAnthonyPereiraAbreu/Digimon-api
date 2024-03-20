
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { DigimonService } from '../../services/digimon.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  public digimon:any;
  public isLoading:boolean = false;
  public apiError: boolean = false;

  constructor(
    private digimonService:DigimonService,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getDigimonName();
  }

  public getDigimonName(){
    const name = this.activatedRoute.snapshot.params['name'];
    const digimonObject = this.digimonService.findDigimonName(name);
  
    return forkJoin([digimonObject]).subscribe(
      res => {
        this.digimon = res[0];
        this.isLoading = true;
      },
      error => {
        this.apiError = true; 
      }
    )
  }
}
