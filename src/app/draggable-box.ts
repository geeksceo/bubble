export class DraggableBox extends HTMLElement {

  static tagName = 'draggable-box';


  static register() {

    customElements.define(this.tagName, this);

  }

  constructor() {
    super();

    this.onMouseDrag = this.onMouseDrag.bind(this);
    this.addEventListener('mousedown', () => {
      window.addEventListener('mousemove', this.onMouseDrag);
    });

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.onMouseDrag);
    });
  }

  onMouseDrag({ movementX = 0, movementY = 0 }) {
    const { left, top } = window.getComputedStyle(this);
    let leftValue = parseInt(left);
    let topValue = parseInt(top);
    this.style.left = `${leftValue + movementX}px`;
    this.style.top = `${topValue + movementY}px`;
  }
}