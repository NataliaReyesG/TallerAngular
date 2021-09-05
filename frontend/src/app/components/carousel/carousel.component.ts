import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

 
  constructor(carousel_config:NgbCarouselConfig) {
    carousel_config.interval = 4000;
    carousel_config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
