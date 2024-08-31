import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relationship',
  standalone: true,
  imports: [],
  templateUrl: './relationship.component.html',
  styleUrl: './relationship.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RelationshipComponent implements OnInit {

  source!: number; target!: number;
  @Input()
  rsh!: {id: number, e1: number, e2: number, fields: string[]};

  ngOnInit(): void { }

}
