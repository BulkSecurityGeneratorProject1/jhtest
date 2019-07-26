import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhtestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhtestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhtestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhtestSharedModule {
  static forRoot() {
    return {
      ngModule: JhtestSharedModule
    };
  }
}
