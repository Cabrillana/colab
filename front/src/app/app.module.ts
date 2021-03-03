import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { LibrovisitasComponent } from './componentes/librovisitas/librovisitas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, NavegacionComponent, HomeComponent, LibrovisitasComponent, ContactoComponent ],

	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],

	providers: [],

	bootstrap: [ AppComponent ]
})
export class AppModule {}
