import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { CreationalOperatorsComponent } from './components/creational-operators/creational-operators.component';
import { PipeableOperatosComponent } from './components/pipeable-operators/pipeable-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationalOperatorsComponent,
    PipeableOperatosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
