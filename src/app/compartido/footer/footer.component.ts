import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: any;

  constructor() { }

  ngOnInit(): void {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    this.anio = anio;
  }

}
