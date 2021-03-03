import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Municipio } from 'src/app/Clases/municipio';
import { MunicipiosService } from 'src/app/Servicios/municipios.service';
import { VisitasService } from 'src/app/Servicios/visitas.service';

@Component({
	selector: 'app-librovisitas',
	templateUrl: './librovisitas.component.html',
	styleUrls: [ './librovisitas.component.css' ]
})
export class LibrovisitasComponent implements OnInit {
	formLibroVisitas = this.fb.group({
		nombre: [ '', [ Validators.required ] ],
		email: [ '', [ Validators.required, Validators.email ] ],
		visitado: [ '', [ Validators.required ] ],
		procedencia: [ '', [ Validators.required ] ],
		comentario: [ '', [ Validators.required ] ]
	});

	municipios: Municipio[] = [];

	constructor(
		private fb: FormBuilder,
		private visitasService: VisitasService,
		private municipiosService: MunicipiosService,
		private irHacia: Router
	) {}
	ngOnInit(): void {
		this.obtenerMunicipios();
	}

	insertarVisitas() {
		this.visitasService.insertarVisitas(this.formLibroVisitas.value).subscribe(
			(respuesta) => {
				console.log(respuesta);
				this.irHacia.navigate([ '' ]);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	obtenerMunicipios() {
		this.municipiosService.obtenerMunicipios().subscribe(
			(respuesta) => {
				console.log(respuesta);
				this.municipios = respuesta;
			},
			(error) => console.log(error)
		);
	}
}
