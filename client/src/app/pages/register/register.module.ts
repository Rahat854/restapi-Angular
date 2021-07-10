import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {RegisterComponent} from "./register.component";


@NgModule({
    declarations: [
        RegisterComponent
    ],
    exports: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }
