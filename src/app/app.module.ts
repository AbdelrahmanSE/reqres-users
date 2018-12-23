import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { routes } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { UsersReducers } from './users/store/users.reducers';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AuthModule,
    UsersModule,
    SharedModule,
    StoreModule.forRoot({Users: UsersReducers}),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
