import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(private authService: AuthService) {}
    ngOnInit() {
    }

    isLogged() {
        return this.authService.isLogged();
    }

    /**
     * Logout on Click
     */
    logout() {
        this.authService.logout();
    }
}
