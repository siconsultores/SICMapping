import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SicMappingToolkitModule} from '../../../sic-mapping-toolkit/src/lib/sic-mapping-toolkit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SicMappingToolkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
