import {Component, OnInit, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getUser, getUserLoggedIn, UserState, getUserImg} from "../../../state-management/reducers/user.reducers";

@Component({
  selector: 'app-user-avatar',
  templateUrl: 'user-avatar.component.html',
  styleUrls: ['user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {

	@Input() userImg: string;
	@Input() userName: string;

	user$: Observable<UserState>;
	userLoggedIn$: Observable<any>;
	// userImg$: Observable<string>;

  constructor(private Store: Store<any>) {
  	this.user$ = this.Store.select(getUser);

  	this.user$.subscribe(function(data) {
  		console.log('header', data);
    })
  }

  ngOnInit() {
  }

}
