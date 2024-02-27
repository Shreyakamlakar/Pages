import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityValueDefinitionComponent } from './entity-value-definition.component';

describe('EntityValueDefinitionComponent', () => {
  let component: EntityValueDefinitionComponent;
  let fixture: ComponentFixture<EntityValueDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityValueDefinitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityValueDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
