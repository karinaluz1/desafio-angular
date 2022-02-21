import { Component, Input, OnInit } from '@angular/core';
import { IndicacoesService } from 'src/app/core/services/indicacoes.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  @Input() rows!: any[];
  constructor(private indicacoesService: IndicacoesService) { }

  ngOnInit(): void {
  }
  deleteSingle(id: string) {
    this.indicacoesService.deleteIndicacao(id).subscribe(
      (res: any) => {
        console.log('deletado')
        console.log(res)
      },
      (error: any) => {
        alert(error);
      }
    )
  }
}
