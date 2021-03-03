import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/Servicios/contacto.service';

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: [ './contacto.component.css' ]
})
export class ContactoComponent implements OnInit {
	formContactos = this.fb.group({
		correo: [ '', [ Validators.required ] ],
		nombre: [ '', [ Validators.required ] ],
		sugerencias: [ '', [ Validators.required ] ]
	});

	constructor(private fb: FormBuilder, private servicioContacto: ContactoService) {}

	ngOnInit(): void {}

	enviarSugerencia() {
		this.servicioContacto.enviarSugerencia(this.formContactos.value).subscribe(
			(respuesta) => {
				console.log(respuesta);
			},
			(error) => {
				console.log(error.error.error);
			}
		);
	}
}
