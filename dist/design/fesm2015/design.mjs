import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class DesignService {
    constructor() { }
}
DesignService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DesignService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DesignComponent {
    constructor() { }
    ngOnInit() {
    }
}
DesignComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DesignComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: DesignComponent, selector: "lib-design", ngImport: i0, template: `
    <p>
      design works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-design',
                    template: `
    <p>
      design works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class DesignModule {
}
DesignModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DesignModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignModule, declarations: [DesignComponent], exports: [DesignComponent] });
DesignModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: DesignModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DesignComponent
                    ],
                    imports: [],
                    exports: [
                        DesignComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of design
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DesignComponent, DesignModule, DesignService };
//# sourceMappingURL=design.mjs.map
