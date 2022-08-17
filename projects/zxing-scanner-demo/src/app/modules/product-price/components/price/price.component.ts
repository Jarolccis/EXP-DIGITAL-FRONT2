import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { FormatsDialogComponent } from '../../../../formats-dialog/formats-dialog.component'; //'./formats-dialog/formats-dialog.component';
import { AppInfoDialogComponent } from '../../../../app-info-dialog/app-info-dialog.component'; //'./app-info-dialog/app-info-dialog.component';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import * as ScanditSDK from 'scandit-sdk';
import { BarcodePicker, ScanResult } from 'scandit-sdk';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  providers: [SearchService],
})
export class PriceComponent {
  //Nuevo Scanner
  public scannerReady = false;
  public showButton = false;
  public showDescription = true;
  public result = '';
  @ViewChild('barcodePicker') barcodePickerElement: ElementRef<
    HTMLDivElement & { barcodePicker: BarcodePicker }
  >;
  //***************

  availableDevices: MediaDeviceInfo[];
  deviceCurrent: MediaDeviceInfo;
  deviceSelected: string;
  search = new FormControl('');
  isLoading = false;
  nameProduct = '';
  marca = '';
  precio: Number;
  precioCRM: Number;
  isResult = false;
  isResult2 = false;
  isPriceEQ = false;
  msg = '';
  msgHeader = '';
  isMsg = false;
  tienda: any;

  descTienda: any;
  isPermisoCamara: any;
  isMsgError = false;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  qrResultString: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  constructor(
    private readonly _dialog: MatDialog,
    private searchService: SearchService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.tienda = params.tienda;
      this.descTienda = params.desc;
      console.log('this.descTienda ', this.descTienda);
      console.log(params.tienda);
    });

    let a: any;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (mediaStream) {
        /* usar el flujo de datos */
        console.log('AQUI SI ');
        a = true;
      })
      .catch(function (err) {
        /* manejar el error */

        console.log('AQUI NO ');
        a = false;
        this.msgHeader = 'Lo sentimos 🤯';
        this.msg =
          'Consulta el precio de este producto con un colaborador de Tottus';
      })
      .then(() => {
        this.isResult2 = a;
      });
  }

  clearResult(): void {
    this.qrResultString = null;
    this.result = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    this.search.setValue(resultString);
    //this.hasDevices=false;
    this.searchProduct();
    // this.isResult=false;
  }

  onDeviceSelectChange(selected: string) {
    console.log('ENTRO');
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) {
      return;
    }
    this.deviceSelected = selectedStr;
    const device = this.availableDevices.find((x) => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }

  onDeviceChange(device: MediaDeviceInfo) {
    console.log('ENTRO2');
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) {
      return;
    }
    this.deviceSelected = selectedStr;
    console.log('device', device);
    console.log('this.availableDevices', this.availableDevices);
    const nroCamaras = this.availableDevices.length;
    this.deviceCurrent = this.availableDevices[3] || undefined;
  }

  openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled,
    };

    this._dialog
      .open(FormatsDialogComponent, { data })
      .afterClosed()
      .subscribe((x) => {
        if (x) {
          this.formatsEnabled = x;
        }
      });
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };

    this._dialog.open(AppInfoDialogComponent, { data });
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }

  searchProduct(condicion?: Boolean) {
    this.isLoading = true;
    this.spinner.show();
    let codTienda =
      this.tienda === undefined
        ? '124'
        : this.tienda === 'undefined'
        ? '124'
        : this.tienda;
    this.descTienda =
      this.descTienda === undefined ? 'Tottus Jockey Plaza' : this.descTienda;

    console.log('thius.tienda', this.tienda);
    console.log('codTienda', codTienda);
    this.searchService.searchProducts$(codTienda, this.search.value).subscribe(
      (res) => {
        try {
          this.descTienda = this.descTienda.replace(/([a-z])([A-Z])/g, '$1 $2');
          console.log('RESPIETA');
          console.log('res', res);

          this.nameProduct = res.name;
          this.marca = res.description;
          this.precio = res.precio;
          this.precioCRM = res.precioCMR;
          console.log('PCMR_RES', res);
          console.log('PCMR', res.precioCMR);
          console.log('PCMR2', this.precioCRM);
          if (res.precio === res.precioCMR) {
            this.isPriceEQ = true;
          } else {
            this.isPriceEQ = false;
          }
          if (res.precio) {
            this.msg = condicion
              ? ''
              : 'Para consultar otro producto, vuelve a escanear';
            this.isMsg = true;
            this.isMsgError = false;
          } else {
            this.msgHeader = 'Lo sentimos 🤯';
            this.msg =
              'Consulta el precio de este producto con un colaborador de Tottus';
            this.isMsg = false;
            this.isMsgError = true;
          }

          this.isLoading = false;
          this.isResult = true;
          this.search.setValue('');
          this.qrResultString = null;
          this.result = null;
          this.spinner.hide();
        } catch (error) {
          this.isLoading = false;
          this.spinner.hide();
        }
      },
      (err) => {
        console.log('err', err);
        this.search.setValue('');
        this.msgHeader = 'Lo sentimos 🤯';
        this.msg =
          'Consulta el precio de este producto con un colaborador de Tottus';
        this.isMsgError = true;
        this.isMsg = false;
        this.isResult = true;
        this.spinner.hide();
        //Capturamos el error

        this.isLoading = false;
      }
    );
  }

  //Nuevo Scanner

  public onReady(): void {
    console.log('No entro');
    this.scannerReady = true;
    this.showButton = true;
    this.startBarcodePicker();
  }

  public onScan(scanResult: { detail: ScanResult }): void {
    console.log('detail', scanResult);
    const calculatedString = scanResult.detail.barcodes.reduce(
      (result, barcode) => {
        return `${barcode.data}`;
      },
      ''
    );

    this.result = calculatedString;
    console.log('calculatedString', calculatedString);
    this.search.setValue(calculatedString);
    this.searchProduct();
  }
  public onAccessError(error: Error): void {
    console.log('detailERRORXXXX');
  }

  public onError(error: Error): void {
    console.log('detailERRORXXXX2', error);
  }

  public onInit(): void {
    console.log('detailERRORXXXX2');
  }

  public startBarcodePicker(): void {
    console.log('ENTORL');
    this.showButton = false;
    this.showDescription = false;

    this.barcodePickerElement.nativeElement.barcodePicker
      .setVisible(true)
      .resumeScanning();
  }
}
