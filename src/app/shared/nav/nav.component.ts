import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('botonToggle', { static: true }) botonToggle: ElementRef<HTMLElement>;
  @ViewChild('navToggle', { static: true }) navToggle: ElementRef<HTMLElement>;

  bandera = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectIdioma(e): any {
    console.log(e.target.value);
    const valor = e.target.value;

    switch (valor) {

      case 'es':
        this.router.navigate(['/inicio']);
        break;

      case 'en':
        this.router.navigate(['/home']);
        break;

        default: this.router.navigate(['inicio']);
    }
  }

  mostrarMenu(e): any {

    const botonToggle = this.botonToggle.nativeElement;
    const navToggle = this.navToggle.nativeElement;

    if (this.bandera === false) {
      navToggle.style.display = 'flex';
      navToggle.classList.remove('animate__bounceOutLeft')
      navToggle.classList.add('animate__bounceInLeft');
      this.bandera = true

    } else if (this.bandera === true) {
      navToggle.classList.remove('animate__bounceInLeft');
      navToggle.classList.add('animate__bounceOutLeft');
      setTimeout(() => {
        navToggle.style.display = 'none';
      }, 1000);
      this.bandera = false;
    }
  }
}
