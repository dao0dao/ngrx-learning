import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

export const provideImports = importProvidersFrom([
  ButtonsModule.forRoot(),
  StoreModule.forRoot(),
  BrowserAnimationsModule,
]);
