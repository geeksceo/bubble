import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  standalone: true,
  imports: [],
  templateUrl: './entity.component.html',
  styleUrl: './entity.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntityComponent implements OnInit {

  @Input()
  node!: {id: number, left: string, top: string};

  ngOnInit(): void { }

}
