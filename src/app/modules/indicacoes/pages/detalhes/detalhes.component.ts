import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicacoesService } from 'src/app/core/services/indicacoes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  id: string = '';
  detalhes: any;
  constructor(private route: ActivatedRoute, private indicacoesService: IndicacoesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getSingle(this.id);
  }
  getSingle(id: string) {
    this.indicacoesService.getIndicacao(id).subscribe(
      (res) => {
        this.detalhes = res;
        console.log(res)
      },
      (error) => {
        alert(error);
      }
    )
  }
}
