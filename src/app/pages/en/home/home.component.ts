import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validator, FormArray, Validators } from '@angular/forms';
import { CorreoService } from '../../../servicios/correo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma: FormGroup;
  spinner = false;
  @ViewChild('botonFormulario', { static: true }) botonFormulario: ElementRef<HTMLElement>;

  constructor(private fb: FormBuilder, private correoService: CorreoService) { }

  ngOnInit(): void {
    this.carrusel();
    this.crearFormulario();
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.estadoFormulario();

  }

  estadoFormulario(): any {

    const boton = this.botonFormulario.nativeElement;
    const i = boton.querySelector('i');

    if (this.forma.invalid) {
      // deshabilitar boton del formulario
      boton.setAttribute('disabled', 'true');
      boton.style.cursor = 'no-drop';
    }

    if (this.forma.valid) {
      // habilitar boton del formulario
      boton.removeAttribute('disabled');
      boton.style.cursor = 'pointer';
    }

    if (this.forma.valid && this.spinner === true) {
      boton.setAttribute('disabled', 'true');
      boton.style.cursor = 'no-drop';

      i.classList.remove('fa-envelope');
      i.classList.add('fa-spinner', 'fa-spin');
    }

    if (this.forma.valid && this.spinner === false) {
      boton.removeAttribute('disabled');
      boton.style.cursor = 'pointer';

      i.classList.remove('fa-spinner', 'fa-spin');
      i.classList.add('fa-envelope')
    }

    if (this.forma.invalid && this.spinner === false) {
      boton.setAttribute('disabled', 'true');
      boton.style.cursor = 'no-drop';

      i.classList.remove('fa-spinner', 'fa-spin');
      i.classList.add('fa-envelope')
    }
  }

  crearFormulario(): any {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mensaje: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]]
    });
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
        // console.log(contador);
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

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get mensajeNoValido() {
    return this.forma.get('mensaje').invalid && this.forma.get('mensaje').touched;
  }

  enviarCorreo(): any {
    // console.log(this.forma);

    if (this.forma.invalid) {

      return Object.values(this.forma.controls).forEach(control => {

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }

      });

    }

    if (this.forma.valid) {

      console.log('ok');

      this.spinner = true;
      const data = new FormData();
      data.append('nombre', `${this.forma.controls.nombre.value}`)
      data.append('correo', `${this.forma.controls.correo.value}`)
      data.append('mensaje', `${this.forma.controls.mensaje.value}`)

      this.correoService.enviarCorreo(data).subscribe((resp: any) => {
        console.log(resp);
        if (resp.ok === true) {
          Swal.fire(
            'Mensaje',
            'Correo enviado, muy pronto te contactaremos',
            'info'
          );
          this.forma.reset();
        } else {
          Swal.fire(
            'Mensaje',
            'No se pudo enviar el correo, intentelo más tarde',
            'error'
          );
        }
        this.spinner = false;
      });
    }
  }

}
