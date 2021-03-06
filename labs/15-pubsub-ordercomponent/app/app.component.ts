// app.component.ts
import {Component} from '@angular/core';
import {City} from "./model/city.model";
import {CityService} from './services/city.service';

@Component({
	moduleId   : module.id,
	selector   : 'city-app',
	templateUrl: 'app.component.html'
})

export class AppComponent {
	title: string  = 'Cities with order component (event bus)';
	cities: City[] = [];
	currentCity: City;

	constructor(private cityService: CityService) {
	}

	ngOnInit() {
		this.cityService.getCities()
			.subscribe(
				cityData => this.cities = cityData.json(),
				err => console.log(err),
				() => console.log('Getting cities complete.')
			)
	}

	showCity(city: City) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	updateCityRating(rating) {
		this.currentCity.rating += rating;
	}
}