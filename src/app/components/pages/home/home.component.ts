import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private setAllDigimons:any;
  public  getDigimonList:any;
  public apiError: boolean = false;


  constructor(private digimonService: DigimonService) {} // Injeção do serviço
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.digimonService.getAllDigimon().then(res => {
      this.setAllDigimons = res;
      this.getDigimonList = this.setAllDigimons;
      console.log(this.getDigimonList);
    })
    .catch(error => {
      this.apiError = true;
    });
  }

  public searchDigimonName(value: string) {
    // const filter = this.setAllDigimons.filter( (res:any ) => {
    //   console.log(!res.name.indexOf(value))
    //   return !res.name.indexOf(value);
    // });
    const selectName = this.digimonService.findDigimonName(value).then(name => {
      console.log(name);
      this.getDigimonList = name;
  });
  }

  public searchDigimonLevel(){
    const select = document.getElementById("digimonLevel") as HTMLSelectElement;
    const selectedValue = select.value; // Aqui está o valor selecionado como uma string
    const selectLevel = this.digimonService.findDigimonLevel(selectedValue).then(level =>{
      console.log(level)
      this.getDigimonList = level;
    });
  }
}
