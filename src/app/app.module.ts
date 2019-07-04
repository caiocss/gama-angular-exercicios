import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLanguagesComponent } from './lista-languages/lista-languages.component';
import { RouterModule, Routes } from '@angular/router';
import { LanguageItemComponent } from './language-item/language-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'counter', component: ContadorComponent},
  {path: 'languages', component: ListaLanguagesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLanguagesComponent,
    LanguageItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
