import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './../../config';


//to avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {


  //Configure Auth0Lock
  lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});

  userProfile: any;

  constructor() {
    //set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    //Add callback for lock 'authenticated' event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      //Fetch profile information
      this.lock.getprofile(authResult.idToken, (error, profile) => {
        if (error) {
          //handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  public login(){
    //call thie show method to display the widget and prompts the user to login.
    this.lock.show();
  };

  public authenticated(){
    //check if there is an unexpired jwt
    //It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout(){
    //remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };

}
