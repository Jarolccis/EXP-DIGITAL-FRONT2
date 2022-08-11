import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  PriceComponent } from './components/price/price.component';
import {  PriceProductComponent } from './pages/price-product/price-product.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { AppInfoDialogComponent } from '../../app-info-dialog/app-info-dialog.component';
import { AppInfoComponent } from '../../app-info/app-info.component';
import { FormatsDialogComponent } from '../../formats-dialog/formats-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../../environments/environment';
import { ZXingScannerModule } from '../../public_api';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PriceComponent,
    PriceProductComponent,
    FormatsDialogComponent, AppInfoComponent, AppInfoDialogComponent
  ],


  imports: [
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   CommonModule,
   ZXingScannerModule,
   MatDialogModule,
   MatListModule,
   MatTooltipModule,
   MatButtonModule,
   MatFormFieldModule,
   MatSelectModule,
   MatInputModule,
   MatMenuModule,
   MatIconModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProductPriceModule { }
