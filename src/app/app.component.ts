import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
  schemas: []
})
export class AppComponent implements OnInit {
  title = 'synaps';

  nodes !: {id: number, left: string, top: string}[];
  edges !: {source: number, target: number}[];

  form = this.fb.nonNullable.group({
    source: [0, Validators.required],
    target: [0, Validators.required],
  });

  constructor(private fb: FormBuilder, private element: ElementRef<HTMLElement>) {}

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
  }

  addNode(e: Event) {
    e.preventDefault();
    this.nodes.push({id: this.nodes.length + 1, left: '320px', top: '80px'});
  }

  onClick(ev: MouseEvent) {
    console.log('rtclick app component ts');
   }

  onSubmit() {
    const newEdge: {source: number, target: number} = {
      source: parseInt(this.form.getRawValue().source.toString()),
      target: parseInt(this.form.getRawValue().target.toString()),
    } ;
    console.log(newEdge);
    if(newEdge.source != newEdge.target)
      this.edges.push(newEdge);
    else
      console.error('Source need to be different of target');
  }

}
