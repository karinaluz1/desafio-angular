import { Component, OnInit } from '@angular/core';
import { IndicacoesService } from 'src/app/core/services/indicacoes.service';

@Component({
  selector: 'app-indicacoes',
  templateUrl: './indicacoes.component.html',
  styleUrls: ['./indicacoes.component.css']
})
export class IndicacoesComponent implements OnInit {

  constructor(private indicacoesService: IndicacoesService) { }

  ngOnInit(): void {
    this.getAll();
  }

  indicacoes!: any[];
  getAll() {
    this.indicacoesService.getIndicacoes().subscribe(
      (res) => {
        this.indicacoes = res;
        console.log(res)
      },
      (error) => {
        alert(error);
      }
    )
  }
}
