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
    const data =  JSON.parse(event.dataTransfer.getData("Text"));

    //console.log(event);
    event.preventDefault();
    //var data = event.dataTransfer.getData("text");
    //console.log(data);

    var target = $("#" + event.target.id);
    var dragged = $("#" + data);

    var card = $("<div>", { "class": "card" });
    var cardInner = $("<div>");
    
    cardInner.append(dragged);
    card.append(cardInner);

    target.append(card);
    
    //event.target.appendChild($("#" + data)); //event.target.appendChild(document.getElementById(data));
    
    this.drop.next(data);
  }
}