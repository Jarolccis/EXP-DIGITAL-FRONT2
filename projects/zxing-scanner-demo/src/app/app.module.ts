
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppInfoDialogComponent } from './app-info-dialog/app-info-dialog.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { AppUiModule } from './app-ui.module';
import { AppComponent } from './app.component';
import { FormatsDialogComponent } from './formats-dialog/formats-dialog.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
//import {  PriceComponent } from '../app/modules/product-price/components/price/price.component';//'..//components/price/price.component';




@NgModule({
    declarations: [AppComponent],
    imports: [
        // Angular
   
        BrowserModule,
        AppRoutingModule,
      
        // Local
      AppUiModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        //BrowserAnimationsModule,
        NgxSpinnerModule,
        ToastrModule.forRoot(
            {
              progressBar:false,
              positionClass:'toast-top-right',
              closeButton:false,
              timeOut:5000
            }
          ), 
    ],

    bootstrap: [AppComponent]

})
export class AppModule { }