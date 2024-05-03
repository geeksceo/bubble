import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { PerfectArrow } from 'perfect-arrow';

@Component({
  selector: 'app-synaps-edge',
  standalone: true,
  imports: [],
  templateUrl: './synaps-edge.component.html',
  styleUrl: './synaps-edge.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SynapsEdgeComponent implements OnInit {

  @Input()
  edge!: {source: number, target: number};

  ngOnInit(): void {
    PerfectArrow.register()
  }

}
