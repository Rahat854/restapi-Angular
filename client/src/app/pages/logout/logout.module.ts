import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import {LogoutComponent} from "./logout.component";
import {LoginComponent} from "../login/login.component";


@NgModule({
    declarations: [
      LogoutComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        LogoutRoutingModule
    ]
})
export class LogoutModule { }
