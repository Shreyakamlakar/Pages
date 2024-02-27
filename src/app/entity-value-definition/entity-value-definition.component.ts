import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, Pipe } from '@angular/core';
import { FormsModule, NgControlStatusGroup } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entity-value-definition',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor,CommonModule],
  templateUrl: './entity-value-definition.component.html',
  styleUrl: './entity-value-definition.component.css',
  host: {ngSkipHydration: 'true'}
})
export class EntityValueDefinitionComponent {

  disableSave=true;
  showBox=false;
  Value='';
  num=0;

  valueDaysArr: {
    Value_Days: string
    No: number
  }[]=[];


addToArray( Value: string){
    this.num++
    this.valueDaysArr.push({
        Value_Days: Value,
        No: this.num
    })
    
}
  onClickNew(){
    console.log('New Clicked');
    this.disableSave=false;
    this.showBox=true;
  }

  onClickSave()
  {
    console.log('Save Clicked');
    console.log(this.Value);
    this.addToArray(this.Value)

    console.log(this.valueDaysArr)
    this.showBox=false
    this.disableSave=true;
  }

  onClickDelete(){
    console.log('Delete Clicked')
  }

  onClickCancel(){
    this.disableSave=true;
    this.showBox=false;
  }
}
