// app.routes.ts
import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";
import {CityDetailComponent} from "./city.detail.component";
import {CanActivateViaAuthGuard} from "./canActivateViaAuthGuard";
import {CanDeactivateComponent} from "./canDeactivate.component";
import {CanDeactivateGuard} from "./canDeactivateGuard";

export const AppRoutes: Routes = [
	{
		path     : '',
		component: AppComponent
	},
	{
		path       : 'home',
		component  : AppComponent,
		canActivate: ['CanAlwaysActivateGuard'] // Function, defined in app.module.ts
	},
	{
		path       : 'add',
		component  : CityAddComponent,
		canActivate: [CanActivateViaAuthGuard] // class, defined in canActivateViaAuthGuard.ts
	},
	{
		path         : 'deactivate',
		component    : CanDeactivateComponent,
		canDeactivate: [CanDeactivateGuard]
	},
	{
		path     : 'detail/:id',
		component: CityDetailComponent
	}
];
