import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-laureate',
  templateUrl: './add-laureate.component.html',
  styleUrls: ['./add-laureate.component.css']
})
export class AddLaureateComponent {

  constructor() { }

  onSubmit(data:any){
    console.log(data.id)
  }

}
