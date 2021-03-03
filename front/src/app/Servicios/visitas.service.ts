import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Visita } from '../Clases/visita';

const url = 'http://localhost/colab/back/visitas/';

@Injectable({
	providedIn: 'root'
})
export class VisitasService {
	constructor(private http: HttpClient) {}

	obtenerVisitas(): Observable<any> {
		return this.http.get(url);
	}

	insertarVisitas(visita: Visita): Observable<any> {
		return this.http.post(url, visita);
	}
}
