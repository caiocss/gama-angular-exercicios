import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Languages } from 'src/Typings/Languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly URL = 'https://alefesouza.dev/gama/languages.php';

  constructor(private http: HttpClient) { }

  getLanguages(){
    return this.http.get<Languages[]>('https://alefesouza.dev/gama/languages.php');
  }
}
