// Module Dependencies
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from "./auth-routing.module";

// Custom Components
import { LoginFormComponent } from "./login-form/login-form.component";

import { AuthGuardService } from "../core/auth-guard.service"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


export const COMPONENTS = [
	LoginFormComponent
];

@NgModule({
	declarations: [
		COMPONENTS
	],
	imports: [
		CommonModule, // ngIf, ngFor, etc...
		ReactiveFormsModule, // For Reactive Forms with FormBuilder

		// Custom Modules
		AuthRoutingModule,
	],
	providers: [
		// User Defined Services
		AuthGuardService // Guard to prevent authentication
	]
})
export class AuthModule {
}
