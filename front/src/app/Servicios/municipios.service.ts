import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const url = 'http://localhost/colab/back/municipios/';

@Injectable({
	providedIn: 'root'
})
export class MunicipiosService {
	constructor(private http: HttpClient) {}

	obtenerMunicipios(): Observable<any> {
		return this.http.get(url);
	}
}
