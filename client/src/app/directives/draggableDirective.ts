import {Directive, HostBinding, Input, HostListener} from "@angular/core";
import {DragService} from "../services/dragService";

export interface DraggableOptions {
  zone?: string;
  data?: any;
}

@Directive({
  selector: "[myDraggable]"
})
export class DraggableDirective {
  constructor(private dragService: DragService) {
    
  }
  
  @HostBinding("draggable")
  get draggable() {
    return true;
  }
  
  @Input()
  set myDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  private options: DraggableOptions = {};
  
  @HostListener("dragstart", ["$event"])
  onDragStart(event: DragEvent) {
    const { zone = "zone", data = {} } = this.options;

    data.target = event.srcElement.parentElement.parentElement.outerHTML;
    
    this.dragService.startDrag(zone);
    event.dataTransfer.setData("Text", JSON.stringify(data));
  }
}