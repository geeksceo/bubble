import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-synaps-node',
  standalone: true,
  imports: [],
  templateUrl: './synaps-node.component.html',
  styleUrl: './synaps-node.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SynapsNodeComponent implements OnInit {

  @Input()
  node!: {id: number, left: string, top: string};

  ngOnInit(): void {}

}
