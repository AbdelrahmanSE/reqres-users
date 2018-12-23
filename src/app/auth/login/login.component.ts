import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    error = '';

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        if (this.authService.isLogged()) {
            this.router.navigate(['/users']);
        }
    }

    /**
     * Login on Click
     * @param form
     */
    login(form: NgForm) {
        this.error = '';
        const username = form.value.username;
        const password = form.value.password;
        this.authService
            .login(username, password)
            .subscribe(
                res => this.router.navigate(['/users']),
                err => (this.error = err.error.error)
            );
    }
}
