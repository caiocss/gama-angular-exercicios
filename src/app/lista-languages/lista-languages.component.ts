import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/Typings/Languages';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-lista-languages',
  templateUrl: './lista-languages.component.html',
  styleUrls: ['./lista-languages.component.css']
})
export class ListaLanguagesComponent implements OnInit {

  languages: Languages[] = [];
  
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguages()
    .subscribe(l => {
      this.languages = l;
    })
  }

}
