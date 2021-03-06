import {Component, OnInit} from '@angular/core';
import {City} from './city.model'
import {CityService} from "./city.service";

// may use Barrel to organize import

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.html',
	styles     : [`.cityPhoto{max-width:200px}`]
})

// Class with properties, array met cities
export class AppComponent implements OnInit {
	// Properties for component/class
	currentCity: City;
	cities: City[];
	cityPhoto: string;

	constructor(private cityService: CityService) {
	}

	ngOnInit() {
		this.cities = this.cityService.getCities();
	}

	getCity(city: City) {
		this.currentCity = this.cityService.getCity(city.id);
		this.cityPhoto   = `img/${this.currentCity.name}.jpg`;
		console.log('City fetched:', this.currentCity);
	}
}