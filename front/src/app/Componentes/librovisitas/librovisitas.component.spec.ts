import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrovisitasComponent } from './librovisitas.component';

describe('LibrovisitasComponent', () => {
	let component: LibrovisitasComponent;
	let fixture: ComponentFixture<LibrovisitasComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ LibrovisitasComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LibrovisitasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
