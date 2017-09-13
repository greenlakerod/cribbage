/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />

import { Output, EventEmitter, Input, HostListener, Directive, HostBinding } from "@angular/core";
import { DragService } from "../services/dragService";

export interface DropTargetOptions {
  zone?: string;
}

@Directive({
  selector: "[myDropTarget]"
})
export class DropTargetDirective {
  constructor(private dragService: DragService) {
    
  }
  
  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  @Output("myDrop") drop = new EventEmitter();
  
  private options: DropTargetOptions = {};
  
  @HostListener("dragenter", ["$event"])
  @HostListener("dragover", ["$event"])
  onDragOver(event: any) {
    const { zone = "zone" } = this.options;
    
    if (this.dragService.accepts(zone)) {
       event.preventDefault();
    }
  }
  
  @HostListener("drop", ["$event"])
  onDrop(event: any) {
    const eventSource =  JSON.parse(event.dataTransfer.getData("Text"));

    var target = $("#" + event.target.id);
    var dragged = $("#" + eventSource.id);

    target.append(dragged);
    
    this.drop.next(eventSource);
  }
}