import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLanguagesComponent } from './lista-languages.component';

describe('ListaLanguagesComponent', () => {
  let component: ListaLanguagesComponent;
  let fixture: ComponentFixture<ListaLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
