import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IndicacoesService } from 'src/app/shared/services/indicacoes.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  @Input() rows!: any[];
  start: number = 0;
  increment: number = 10;
  end = 10;
  constructor(private indicacoesService: IndicacoesService) { }

  ngOnInit(): void { }
  @Output() deleted: EventEmitter<any> = new EventEmitter<boolean>();
  deleteSingle(id: string) {
    this.indicacoesService.deleteIndicacao(id).subscribe(
      (res: any) => {
        console.log('deletado');
        console.log(res);
        this.deleted.emit()
      },
      (error: any) => {
        alert(error);
      }
    );
  }

  getTotal(): number {
    return this.rows.length;
  }
}
