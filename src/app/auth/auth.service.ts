import { Router } from '@angular/router';
import { AppConfig } from './../app.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private httpClient: HttpClient, private router: Router) {}

    login(username: string, password: string) {
        const request = this.httpClient.post(AppConfig.REST_ROUTE + '/login', {
            username,
            password
        });
        request.subscribe((res: any) => this.setToken(res.token));
        this.router.navigate(['/users']);
        return request;
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLogged() {
        return this.getToken() !== null;
    }
}
