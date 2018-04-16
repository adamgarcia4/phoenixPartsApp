import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from "@ngrx/store";

import {partReducer} from "./reducers/part.reducers";
import {userReducer} from "./reducers/user.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./effects/user.effects";


const reducer = {
	part: partReducer,
	user: userReducer
}; // TODO: do I want to put Router state here too?


@NgModule({
	imports: [
		StoreModule.forRoot(reducer),
		StoreDevtoolsModule.instrument({
			maxAge: 15 //  Retains last 25 states
		}),
		EffectsModule.forRoot([UserEffects])
	],
	declarations: [],
	exports: [
		StoreModule,
		StoreDevtoolsModule,
		EffectsModule
	]
})
export class StateManagementModule {
	// TODO: What is this code for?  https://goo.gl/Q1RdAg
}

// imports: [
// 	StoreModule.forRoot(reducer),
// 	StoreDevtoolsModule.instrument({
// 		maxAge: 10 //  Buffers the last 10 states
// 	}),
// 	EffectsModule.forRoot(effects),
// 	fromRouter.StoreRouterConnectingModule