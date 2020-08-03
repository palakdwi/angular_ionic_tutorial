import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRecipesPage } from './new-recipes.page';

describe('NewRecipesPage', () => {
  let component: NewRecipesPage;
  let fixture: ComponentFixture<NewRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
