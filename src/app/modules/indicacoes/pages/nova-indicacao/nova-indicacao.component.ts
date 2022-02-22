import { Component, OnInit } from '@angular/core';
import { IndicacoesService } from 'src/app/shared/services/indicacoes.service';
import { Indicacao } from 'src/app/shared/interfaces/indicacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-indicacao',
  templateUrl: './nova-indicacao.component.html',
  styleUrls: ['./nova-indicacao.component.css']
})
export class NovaIndicacaoComponent implements OnInit {
  nova: Indicacao = {
    nome: '',
    telefone: '',
    email: '',
    corretor: '',
  }
  constructor(private indicacoesService: IndicacoesService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(indicacao: Indicacao) {
    this.indicacoesService.postIndicacao(indicacao).subscribe(
      (res) => {
        console.log('cadastrado')
        console.log(res)
        this.router.navigate(['indicacoes'])
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
