import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-events-experiments',
  templateUrl: './browser-events-experiments.component.html',
  styleUrls: ['./browser-events-experiments.component.css']
})
export class BrowserEventsExperimentsComponent implements OnInit {

  hoverSection = new HTMLElement;

  constructor() {  }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    this.hoverSection.addEventListener('mousemove', onMouseMove);

  }

  function onMouseMove(ev: MouseEvent) {
    console.log(ev);
  }
}
