import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  anio: any;

  constructor() { }

  ngOnInit(): void {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    this.anio = anio;
  }

}
