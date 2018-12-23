import { Router } from '@angular/router';
import { AppConfig } from './../app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Authentication Service
 * This is to do all the authentications of the system
 */
@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    /**
     * Login Handler to do the login to the API
     * @param username
     * @param password
     * @returns Observable
     */
    login(username: string, password: string) {
        const request = this.httpClient.post(AppConfig.REST_ROUTE + '/login', {
            username,
            password
        });
        request.subscribe((res: any) => this.setToken(res.token));
        this.router.navigate(['/users']);
        return request;
    }

    /**
     * Performs the Logout from the application
     */
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }

    /**
     *
     * @param token Sets the auth token
     */
    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    /**
     * Gets the Auth Token
     * @returns string
     */
    getToken() {
        return localStorage.getItem('token');
    }

    /**
     * Checks if the user is logged in
     * @returns boolean
     */
    isLogged() {
        return this.getToken() !== null;
    }
}
