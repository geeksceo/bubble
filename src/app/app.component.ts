import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RightClickDirective } from './core/directives/right-click.directive';
import { SynapsNodeComponent } from './components/synaps-node/synaps-node.component';
import { SynapsEdgeComponent } from './components/synaps-edge/synaps-edge.component';
import { DraggableBox } from './draggable-box';
import { PerfectArrow } from 'perfect-arrow';
import { EntityBox } from './entity-box';
import { Relationship } from './relationship';
import { SInput } from './input';
import { SynapsFieldComponent } from './components/synaps-field/synaps-field.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterToolsComponent } from "./components/footer-tools/footer-tools.component";
import { EntityComponent } from "./components/entity/entity.component";
import { RelationshipComponent } from "./components/relationship/relationship.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule, RightClickDirective,
    SynapsNodeComponent, SynapsEdgeComponent, SynapsFieldComponent,
    HeaderComponent,
    FooterToolsComponent,
    EntityComponent,
    RelationshipComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'synaps';
  isDisplayContextMenu: boolean = false;
  nodes !: {id: number, left: string, top: string}[];
  edges !: {source: number, target: number}[];
  relationships !: {id: number, e1: number, e2: number, fields: string[]}[];

  form = this.fb.nonNullable.group({
    source: [0, Validators.required],
    target: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {

    DraggableBox.register();
    EntityBox.register();
    Relationship.register();
    SInput.register();
    PerfectArrow.register();

    this.nodes = [
      {id: 1, left: '0px', top: '0px'},
      {id: 2, left: '100px', top: '200px'},
      {id: 3, left: '200px', top: '100px'},
    ];

    this.edges = [
      {source: 1, target: 2},
    ];

    this.relationships = [
      { id: 1, e1: 1, e2: 3, fields: []},
    ];
  }

  addNode(e: Event) {
    e.preventDefault();
    this.nodes.push({id: this.nodes.length + 1, left: '320px', top: '80px'});
  }

  addRelationship(e: Event) {
    e.preventDefault();
    this.relationships.push({
      id: this.relationships.length + 1,
      e1: 0,
      e2: 0,
      fields: []
    });
  }

  onClick(e: MouseEvent) {
    console.log('rtclick app component ts');
    const elt = document.getElementById('contextmenu');
    if(this.isDisplayContextMenu) {
      elt!.style.display = 'none';
    } else {
      elt!.style.left = `${e.clientX+100}px`;
      elt!.style.top = `${e.clientY+100}px`;
      elt!.style.display = 'block';
    }
    this.isDisplayContextMenu = !this.isDisplayContextMenu;
  }

  onSubmit() {
    const newEdge: {source: number, target: number} = {
      source: parseInt(this.form.getRawValue().source.toString()),
      target: parseInt(this.form.getRawValue().target.toString()),
    };

    this.relationships.push({
      id: this.relationships.length + 1,
      e1: parseInt(this.form.getRawValue().source.toString()),
      e2: parseInt(this.form.getRawValue().target.toString()),
      fields: []
    });
    console.log(newEdge);
    if(newEdge.source != newEdge.target)
      this.edges.push(newEdge);
    else
      console.error('Source need to be different of target');
  }

}
