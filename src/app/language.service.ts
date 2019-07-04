import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from 'src/Typings/Languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly URL = 'http://localhost:3000/languages';

  constructor(private http: HttpClient) { }

  getLanguages(){
    return this.http.get<Languages[]>(this.URL);
  }

  insertLanguage(language: Languages){
    return this.http.post(this.URL, language);
  }
}
