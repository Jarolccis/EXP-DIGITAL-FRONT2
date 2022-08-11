import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exp-digital-front';

  barcodeValue=false;

  constructor( ) { }
  

  ngAfterViewInit() {

 }

 onValueChanges(result:any) {
this.barcodeValue = result.codeResult.code;
 }

 onStarted(started:any) {
  console.log(started);
 }
}

