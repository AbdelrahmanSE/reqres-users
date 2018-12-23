import { AuthService } from './auth.service';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * This Authentication Guard Services prevents the user from accessing protected pages
 */
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isLogged();
    }
}
