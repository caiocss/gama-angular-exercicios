import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Languages } from 'src/Typings/Languages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  language: Languages = {
    id: null,
    name: '',
    creator: '',
    year: null

  }
  constructor(private languageService: LanguageService, private router: Router) { }

  ngOnInit() {
  }

  enviar() {
    this.languageService.insertLanguage(this.language).subscribe(() => {
      alert('Linguagem adicionada!');
      this.router.navigateByUrl('/languages');
    });
  }

}
