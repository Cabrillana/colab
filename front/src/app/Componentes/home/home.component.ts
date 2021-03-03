import { Component, OnInit } from '@angular/core';
import { Visita } from 'src/app/Clases/visita';
import { VisitasService } from 'src/app/Servicios/visitas.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	libroVisitas: Visita[] = [];
	constructor(private servicioVisita: VisitasService) {}

	ngOnInit(): void {
		this.escribirVisitas();
	}

	escribirVisitas(): void {
		this.servicioVisita.obtenerVisitas().subscribe(
			(respuesta) => {
				console.log(respuesta);
				this.libroVisitas = respuesta;
			},
			(error) => console.log(error)
		);
	}
}
