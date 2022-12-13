import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaginationComponent } from './_components';

import { fakeBackendProvider } from './_helpers';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        PaginationComponent
    ],
    providers: [
        // provider for fake backend api
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }