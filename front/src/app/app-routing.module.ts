import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { LibrovisitasComponent } from './componentes/librovisitas/librovisitas.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'librovisitas', component: LibrovisitasComponent },
	{ path: 'contacto', component: ContactoComponent }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
