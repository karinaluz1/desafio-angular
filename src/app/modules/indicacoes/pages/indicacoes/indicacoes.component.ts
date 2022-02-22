import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IndicacoesService } from 'src/app/shared/services/indicacoes.service';

@Component({
  selector: 'app-indicacoes',
  templateUrl: './indicacoes.component.html',
  styleUrls: ['./indicacoes.component.css']
})
export class IndicacoesComponent implements OnInit {

  constructor(private indicacoesService: IndicacoesService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  indicacoes: any[] = [];
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
  go() {
    this.router.navigate(['/indicacoes/cadastrar'])
  }
}
