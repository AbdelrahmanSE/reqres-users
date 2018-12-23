import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule {}
