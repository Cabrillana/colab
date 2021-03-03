import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../Clases/contacto';

const url = 'http://localhost/colab/back/contacato';
@Injectable({
	providedIn: 'root'
})
export class ContactoService {
	constructor(private http: HttpClient) {}

	enviarSugerencia(c: Contacto): Observable<any> {
		return this.http.post(url, c);
	}
}
