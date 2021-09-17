import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ControlesComponent } from './componentes/controles/controles.component';
import { DisplayComponent } from './componentes/display/display.component';
import { ColeccionPipe } from './pipes/coleccion.pipe';
import { FormsModule } from '@angular/forms';
import { EstadoPipe } from './pipes/estado.pipe';
import { BuscarPipe } from './pipes/buscar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ControlesComponent,
    DisplayComponent,
    ColeccionPipe,
    EstadoPipe,
    BuscarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
