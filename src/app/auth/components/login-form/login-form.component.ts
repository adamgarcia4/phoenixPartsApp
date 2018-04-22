import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store} from "@ngrx/store";
import {ActionTypes} from "../../../state-management/actions/user.actions";

@Component({
	selector: 'app-login-form',
	templateUrl: 'login-form.component.html',
	styleUrls: ['login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	form: FormGroup;

	constructor(private _fb: FormBuilder, private _store: Store<any>) {
		this.form = this._fb.group({
			email: [''], // TODO: validator?
			password: ['']
		});

		// This code triggers at every form change
		// this.form.valueChanges.subscribe(function(val) {
		// 	console.log(val);
		// })
	}

	onSubmit() {
		// console.log(this.form.value);
		this._store.dispatch({
			type: ActionTypes.REGISTER_USER,
			payload: this.form.value
		});
	}

	ngOnInit() {
	}


}
