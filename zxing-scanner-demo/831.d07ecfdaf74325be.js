"use strict";
(self["webpackChunkzxing_scanner_demo"] = self["webpackChunkzxing_scanner_demo"] || []).push([[831],{

/***/ 2468:
/*!*******************************************************************************************!*\
  !*** ./projects/zxing-scanner-demo/src/app/modules/product-price/product-price.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPriceModule": () => (/* binding */ ProductPriceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _components_price_price_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/price/price.component */ 6774);
/* harmony import */ var _pages_price_product_price_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/price-product/price-product.component */ 9106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4006);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 8480);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 7185);
/* harmony import */ var _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-info-dialog/app-info-dialog.component */ 533);
/* harmony import */ var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-info/app-info.component */ 8448);
/* harmony import */ var _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../formats-dialog/formats-dialog.component */ 8965);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 1489);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ 4170);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public_api */ 3761);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4859);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5938);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9549);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 7392);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6338);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 8255);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 4385);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4650);

























let ProductPriceModule = /*#__PURE__*/(() => {
  class ProductPriceModule {}

  ProductPriceModule.ɵfac = function ProductPriceModule_Factory(t) {
    return new (t || ProductPriceModule)();
  };

  ProductPriceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ProductPriceModule
  });
  ProductPriceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production
    }), _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _public_api__WEBPACK_IMPORTED_MODULE_6__.ZXingScannerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
  return ProductPriceModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProductPriceModule, {
    declarations: [_components_price_price_component__WEBPACK_IMPORTED_MODULE_0__.PriceComponent, _pages_price_product_price_product_component__WEBPACK_IMPORTED_MODULE_1__.PriceProductComponent, _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_4__.FormatsDialogComponent, _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_3__.AppInfoComponent, _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_2__.AppInfoDialogComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _public_api__WEBPACK_IMPORTED_MODULE_6__.ZXingScannerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 4516:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromSubscribable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromSubscribable": () => (/* binding */ fromSubscribable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 9751);

function fromSubscribable(subscribable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscribable.subscribe(subscriber));
} //# sourceMappingURL=fromSubscribable.js.map

/***/ }),

/***/ 1848:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEVER": () => (/* binding */ NEVER),
/* harmony export */   "never": () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 9751);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 5032);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
  return NEVER;
} //# sourceMappingURL=never.js.map

/***/ }),

/***/ 8963:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/connect.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 6758);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/from */ 188);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 4482);
/* harmony import */ var _observable_fromSubscribable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/fromSubscribable */ 4516);




const DEFAULT_CONFIG = {
  connector: () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject()
};
function connect(selector, config = DEFAULT_CONFIG) {
  const {
    connector
  } = config;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    const subject = connector();
    (0,_observable_from__WEBPACK_IMPORTED_MODULE_2__.from)(selector((0,_observable_fromSubscribable__WEBPACK_IMPORTED_MODULE_3__.fromSubscribable)(subject))).subscribe(subscriber);
    subscriber.add(source.subscribe(subject));
  });
} //# sourceMappingURL=connect.js.map

/***/ }),

/***/ 249:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/multicast.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multicast": () => (/* binding */ multicast)
/* harmony export */ });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/ConnectableObservable */ 4033);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 576);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ 8963);



function multicast(subjectOrSubjectFactory, selector) {
  const subjectFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(subjectOrSubjectFactory) ? subjectOrSubjectFactory : () => subjectOrSubjectFactory;

  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(selector)) {
    return (0,_connect__WEBPACK_IMPORTED_MODULE_1__.connect)(selector, {
      connector: subjectFactory
    });
  }

  return source => new _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_2__.ConnectableObservable(source, subjectFactory);
} //# sourceMappingURL=multicast.js.map

/***/ }),

/***/ 3446:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/publish.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subject */ 6758);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ 249);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ 8963);



function publish(selector) {
  return selector ? source => (0,_connect__WEBPACK_IMPORTED_MODULE_0__.connect)(selector)(source) : source => (0,_multicast__WEBPACK_IMPORTED_MODULE_1__.multicast)(new _Subject__WEBPACK_IMPORTED_MODULE_2__.Subject())(source);
} //# sourceMappingURL=publish.js.map

/***/ }),

/***/ 1489:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceWorkerModule": () => (/* binding */ ServiceWorkerModule),
/* harmony export */   "SwPush": () => (/* binding */ SwPush),
/* harmony export */   "SwRegistrationOptions": () => (/* binding */ SwRegistrationOptions),
/* harmony export */   "SwUpdate": () => (/* binding */ SwUpdate)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9770);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2843);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4968);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1848);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6451);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4004);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9300);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3446);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 4326);
/**
 * @license Angular v14.0.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const ERR_SW_NOT_SUPPORTED = 'Service workers are disabled or not supported by this browser';

function errorObservable(message) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(new Error(message)));
}
/**
 * @publicApi
 */


class NgswCommChannel {
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;

    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(serviceWorker, 'controllerchange');
      const controllerChanges = controllerChangeEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => serviceWorker.controller));
      const currentController = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(serviceWorker.controller));
      const controllerWithChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(c => !!c));
      this.registration = this.worker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => serviceWorker.getRegistration()));
      const rawEvents = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(serviceWorker, 'message');
      const rawEventPayload = rawEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => event.data));
      const eventsUnconnected = rawEventPayload.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event && event.type));
      const events = eventsUnconnected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.publish)());
      events.connect();
      this.events = events;
    }
  }

  postMessage(action, payload) {
    return this.worker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(sw => {
      sw.postMessage({
        action,
        ...payload
      });
    })).toPromise().then(() => undefined);
  }

  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }

  generateNonce() {
    return Math.round(Math.random() * 10000000);
  }

  eventsOfType(type) {
    let filterFn;

    if (typeof type === 'string') {
      filterFn = event => event.type === type;
    } else {
      filterFn = event => type.includes(event.type);
    }

    return this.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(filterFn));
  }

  nextEventOfType(type) {
    return this.eventsOfType(type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1));
  }

  waitForOperationCompleted(nonce) {
    return this.eventsOfType('OPERATION_COMPLETED').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event.nonce === nonce), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
      if (event.result !== undefined) {
        return event.result;
      }

      throw new Error(event.error);
    })).toPromise();
  }

  get isEnabled() {
    return !!this.serviceWorker;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Subscribe and listen to
 * [Web Push
 * Notifications](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices) through
 * Angular Service Worker.
 *
 * @usageNotes
 *
 * You can inject a `SwPush` instance into any component or service
 * as a dependency.
 *
 * <code-example path="service-worker/push/module.ts" region="inject-sw-push"
 * header="app.component.ts"></code-example>
 *
 * To subscribe, call `SwPush.requestSubscription()`, which asks the user for permission.
 * The call returns a `Promise` with a new
 * [`PushSubscription`](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
 * instance.
 *
 * <code-example path="service-worker/push/module.ts" region="subscribe-to-push"
 * header="app.component.ts"></code-example>
 *
 * A request is rejected if the user denies permission, or if the browser
 * blocks or does not support the Push API or ServiceWorkers.
 * Check `SwPush.isEnabled` to confirm status.
 *
 * Invoke Push Notifications by pushing a message with the following payload.
 *
 * ```ts
 * {
 *   "notification": {
 *     "actions": NotificationAction[],
 *     "badge": USVString,
 *     "body": DOMString,
 *     "data": any,
 *     "dir": "auto"|"ltr"|"rtl",
 *     "icon": USVString,
 *     "image": USVString,
 *     "lang": DOMString,
 *     "renotify": boolean,
 *     "requireInteraction": boolean,
 *     "silent": boolean,
 *     "tag": DOMString,
 *     "timestamp": DOMTimeStamp,
 *     "title": DOMString,
 *     "vibrate": number[]
 *   }
 * }
 * ```
 *
 * Only `title` is required. See `Notification`
 * [instance
 * properties](https://developer.mozilla.org/en-US/docs/Web/API/Notification#Instance_properties).
 *
 * While the subscription is active, Service Worker listens for
 * [PushEvent](https://developer.mozilla.org/en-US/docs/Web/API/PushEvent)
 * occurrences and creates
 * [Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
 * instances in response.
 *
 * Unsubscribe using `SwPush.unsubscribe()`.
 *
 * An application can subscribe to `SwPush.notificationClicks` observable to be notified when a user
 * clicks on a notification. For example:
 *
 * <code-example path="service-worker/push/module.ts" region="subscribe-to-notification-clicks"
 * header="app.component.ts"></code-example>
 *
 * You can read more on handling notification clicks in the [Service worker notifications
 * guide](guide/service-worker-notifications).
 *
 * @see [Push Notifications](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
 * @see [Angular Push Notifications](https://blog.angular-university.io/angular-push-notifications/)
 * @see [MDN: Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
 * @see [MDN: Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
 * @see [MDN: Web Push API Notifications best practices](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices)
 *
 * @publicApi
 */


let SwPush = /*#__PURE__*/(() => {
  class SwPush {
    constructor(sw) {
      this.sw = sw;
      this.subscriptionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();

      if (!sw.isEnabled) {
        this.messages = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        this.notificationClicks = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        return;
      }

      this.messages = this.sw.eventsOfType('PUSH').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(message => message.data));
      this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(message => message.data));
      this.pushManager = this.sw.registration.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(registration => registration.pushManager));
      const workerDrivenSubscriptions = this.pushManager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(pm => pm.getSubscription()));
      this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(workerDrivenSubscriptions, this.subscriptionChanges);
    }
    /**
     * True if the Service Worker is enabled (supported by the browser and enabled via
     * `ServiceWorkerModule`).
     */


    get isEnabled() {
      return this.sw.isEnabled;
    }
    /**
     * Subscribes to Web Push Notifications,
     * after requesting and receiving user permission.
     *
     * @param options An object containing the `serverPublicKey` string.
     * @returns A Promise that resolves to the new subscription object.
     */


    requestSubscription(options) {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      const pushOptions = {
        userVisibleOnly: true
      };
      let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+'));
      let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));

      for (let i = 0; i < key.length; i++) {
        applicationServerKey[i] = key.charCodeAt(i);
      }

      pushOptions.applicationServerKey = applicationServerKey;
      return this.pushManager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(pm => pm.subscribe(pushOptions)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).toPromise().then(sub => {
        this.subscriptionChanges.next(sub);
        return sub;
      });
    }
    /**
     * Unsubscribes from Service Worker push notifications.
     *
     * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
     *          active subscription or the unsubscribe operation fails.
     */


    unsubscribe() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      const doUnsubscribe = sub => {
        if (sub === null) {
          throw new Error('Not subscribed to push notifications.');
        }

        return sub.unsubscribe().then(success => {
          if (!success) {
            throw new Error('Unsubscribe failed!');
          }

          this.subscriptionChanges.next(null);
        });
      };

      return this.subscription.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(doUnsubscribe)).toPromise();
    }

    decodeBase64(input) {
      return atob(input);
    }

  }

  SwPush.ɵfac = function SwPush_Factory(t) {
    return new (t || SwPush)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](NgswCommChannel));
  };

  SwPush.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: SwPush,
    factory: SwPush.ɵfac
  });
  return SwPush;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Subscribe to update notifications from the Service Worker, trigger update
 * checks, and forcibly activate updates.
 *
 * @see {@link guide/service-worker-communications Service worker communication guide}
 *
 * @publicApi
 */


let SwUpdate = /*#__PURE__*/(() => {
  class SwUpdate {
    constructor(sw) {
      this.sw = sw;

      if (!sw.isEnabled) {
        this.versionUpdates = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        this.available = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        this.activated = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        this.unrecoverable = rxjs__WEBPACK_IMPORTED_MODULE_12__.NEVER;
        return;
      }

      this.versionUpdates = this.sw.eventsOfType(['VERSION_DETECTED', 'VERSION_INSTALLATION_FAILED', 'VERSION_READY', 'NO_NEW_VERSION_DETECTED']);
      this.available = this.versionUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(evt => evt.type === 'VERSION_READY'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(evt => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion
      })));
      this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED');
      this.unrecoverable = this.sw.eventsOfType('UNRECOVERABLE_STATE');
    }
    /**
     * True if the Service Worker is enabled (supported by the browser and enabled via
     * `ServiceWorkerModule`).
     */


    get isEnabled() {
      return this.sw.isEnabled;
    }
    /**
     * Checks for an update and waits until the new version is downloaded from the server and ready
     * for activation.
     *
     * @returns a promise that
     * - resolves to `true` if a new version was found and is ready to be activated.
     * - resolves to `false` if no new version was found
     * - rejects if any error occurs
     */


    checkForUpdate() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      const nonce = this.sw.generateNonce();
      return this.sw.postMessageWithOperation('CHECK_FOR_UPDATES', {
        nonce
      }, nonce);
    }
    /**
     * Updates the current client (i.e. browser tab) to the latest version that is ready for
     * activation.
     *
     * @returns a promise that
     *  - resolves to `true` if an update was activated successfully
     *  - resolves to `false` if no update was available (for example, the client was already on the
     *    latest version).
     *  - rejects if any error occurs
     */


    activateUpdate() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      const nonce = this.sw.generateNonce();
      return this.sw.postMessageWithOperation('ACTIVATE_UPDATE', {
        nonce
      }, nonce);
    }

  }

  SwUpdate.ɵfac = function SwUpdate_Factory(t) {
    return new (t || SwUpdate)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](NgswCommChannel));
  };

  SwUpdate.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: SwUpdate,
    factory: SwUpdate.ɵfac
  });
  return SwUpdate;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token that can be used to provide options for `ServiceWorkerModule` outside of
 * `ServiceWorkerModule.register()`.
 *
 * You can use this token to define a provider that generates the registration options at runtime,
 * for example via a function call:
 *
 * {@example service-worker/registration-options/module.ts region="registration-options"
 *     header="app.module.ts"}
 *
 * @publicApi
 */


class SwRegistrationOptions {}

const SCRIPT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_14__.InjectionToken('NGSW_REGISTER_SCRIPT');

function ngswAppInitializer(injector, script, options, platformId) {
  const initializer = () => {
    if (!((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(platformId) && 'serviceWorker' in navigator && options.enabled !== false)) {
      return;
    } // Wait for service worker controller changes, and fire an INITIALIZE action when a new SW
    // becomes active. This allows the SW to initialize itself even if there is no application
    // traffic.


    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (navigator.serviceWorker.controller !== null) {
        navigator.serviceWorker.controller.postMessage({
          action: 'INITIALIZE'
        });
      }
    });
    let readyToRegister$;

    if (typeof options.registrationStrategy === 'function') {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || 'registerWhenStable:30000').split(':');

      switch (strategy) {
        case 'registerImmediately':
          readyToRegister$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
          break;

        case 'registerWithDelay':
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;

        case 'registerWhenStable':
          readyToRegister$ = !args[0] ? whenStable(injector) : (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(whenStable(injector), delayWithTimeout(+args[0]));
          break;

        default:
          // Unknown strategy.
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    } // Don't return anything to avoid blocking the application until the SW is registered.
    // Also, run outside the Angular zone to avoid preventing the app from stabilizing (especially
    // given that some registration strategies wait for the app to stabilize).
    // Catch and log the error if SW registration fails to avoid uncaught rejection warning.


    const ngZone = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgZone);
    ngZone.runOutsideAngular(() => readyToRegister$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch(err => console.error('Service worker registration failed with:', err))));
  };

  return initializer;
}

function delayWithTimeout(timeout) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.delay)(timeout));
}

function whenStable(injector) {
  const appRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_14__.ApplicationRef);
  return appRef.isStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(stable => stable));
}

function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel((0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.isPlatformBrowser)(platformId) && opts.enabled !== false ? navigator.serviceWorker : undefined);
}
/**
 * @publicApi
 */


let ServiceWorkerModule = /*#__PURE__*/(() => {
  class ServiceWorkerModule {
    /**
     * Register the given Angular Service Worker script.
     *
     * If `enabled` is set to `false` in the given options, the module will behave as if service
     * workers are not supported by the browser, and the service worker will not be registered.
     */
    static register(script, opts = {}) {
      return {
        ngModule: ServiceWorkerModule,
        providers: [{
          provide: SCRIPT,
          useValue: script
        }, {
          provide: SwRegistrationOptions,
          useValue: opts
        }, {
          provide: NgswCommChannel,
          useFactory: ngswCommChannelFactory,
          deps: [SwRegistrationOptions, _angular_core__WEBPACK_IMPORTED_MODULE_14__.PLATFORM_ID]
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.APP_INITIALIZER,
          useFactory: ngswAppInitializer,
          deps: [_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector, SCRIPT, SwRegistrationOptions, _angular_core__WEBPACK_IMPORTED_MODULE_14__.PLATFORM_ID],
          multi: true
        }]
      };
    }

  }

  ServiceWorkerModule.ɵfac = function ServiceWorkerModule_Factory(t) {
    return new (t || ServiceWorkerModule)();
  };

  ServiceWorkerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: ServiceWorkerModule
  });
  ServiceWorkerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    providers: [SwPush, SwUpdate]
  });
  return ServiceWorkerModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=service-worker.mjs.map

/***/ })

}]);