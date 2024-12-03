import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  public optionSelected: string = '';
  private readonly route: ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    this.optionSelected = this.route.snapshot.paramMap.get('option') || '';
  }
}
