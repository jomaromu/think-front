import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  @ViewChild('botonToggle', {static: true}) botonToggle: ElementRef<HTMLElement>;
  @ViewChild('navToggle', {static: true}) navToggle: ElementRef<HTMLElement>;


  bandera = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(e): any {

    const botonToggle = this.botonToggle.nativeElement;
    const navToggle = this.navToggle.nativeElement;

    if (this.bandera === false) {
      navToggle.style.display = 'flex';
      navToggle.classList.remove('animate__bounceOutLeft')
      navToggle.classList.add('animate__bounceInLeft');
      this.bandera = true

    }else if (this.bandera === true) {
      navToggle.classList.remove('animate__bounceInLeft');
      navToggle.classList.add('animate__bounceOutLeft');
      setTimeout(() => {
        navToggle.style.display = 'none';
      }, 1000);
      this.bandera = false;
    }
  }

}
