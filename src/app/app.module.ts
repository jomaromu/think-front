import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// español
import { NavegacionComponent } from './compartido/navegacion/navegacion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { FooterComponent } from './compartido/footer/footer.component';

// ingles
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/en/home/home.component';
import { FootComponent } from './shared/foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    InicioComponent,
    HomeComponent,
    NavComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
