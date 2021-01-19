import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.carrusel();
  }

  carrusel(): any {

    // cantidad de items
    let items: any = document.getElementsByClassName('imgCarrusel');
    let imgs: any = Array.from(items);
    let contador = 0;

    const animacionCarrusel = setInterval(() => {

      if (contador > (imgs.length - 1)) {

        imgs[1].style.display = 'flex';
        imgs[1].classList.add('animate__fadeIn', 'animate__slower');
        contador = 0;
        console.log(contador);
      }

      if (contador < imgs.length) {
        imgs[contador].style.display = 'none';
        imgs[contador].classList.remove('animate__fadeIn', 'animate__slower');
      }

      if (contador === 1) {
        imgs[0].style.display = 'flex';
        imgs[0].classList.add('animate__fadeIn', 'animate__slower');
      }

      contador++;
    }, 10000);
  }

}
