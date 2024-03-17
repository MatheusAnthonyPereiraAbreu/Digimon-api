import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private digimonService: DigimonService) {} // Injeção do serviço

  ngOnInit(): void {
    console.log(this.digimonService.getAllDigimon());
  }
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();

  public searchDigimonName(value:string){
    const digimonName = this.digimonService.findDigimonName(value);
  }

  public searchDigimonLevel(value:string){
    const digimonLevel = this.digimonService.findDigimonLevel(value);
  }
  
}
