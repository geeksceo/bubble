import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RightClickDirective } from './directives/right-click.directive';
import { SynapsNodeComponent } from './components/synaps-node/synaps-node.component';
import { SynapsEdgeComponent } from './components/synaps-edge/synaps-edge.component';
import { DraggableBox } from './draggable-box';
import { PerfectArrow } from 'perfect-arrow';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule, RightClickDirective,
    SynapsNodeComponent, SynapsEdgeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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

  onClick(ev: MouseEvent) { }

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
