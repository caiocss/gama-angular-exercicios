import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLanguagesComponent } from './lista-languages/lista-languages.component';
import { RouterModule, Routes } from '@angular/router';
import { LanguageItemComponent } from './language-item/language-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddLanguageComponent } from './add-language/add-language.component';
import { FormsModule } from '@angular/forms';
import { TrocaValorAnoPipe } from './troca-valor-ano.pipe';

const routes: Routes = [
  {path: 'counter', component: ContadorComponent},
  {path: 'languages', component: ListaLanguagesComponent},
  {path: 'addlanguage', component: AddLanguageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLanguagesComponent,
    LanguageItemComponent,
    AddLanguageComponent,
    TrocaValorAnoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
