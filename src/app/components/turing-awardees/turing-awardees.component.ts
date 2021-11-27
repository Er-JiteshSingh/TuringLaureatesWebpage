import { Component, OnInit } from '@angular/core';
import { WebServiceCallService } from 'src/app/services/web-service-call.service';

@Component({
  selector: 'app-turing-awardees',
  templateUrl: './turing-awardees.component.html',
  styleUrls: ['./turing-awardees.component.css']
})
export class TuringAwardeesComponent {

  awardees: any;
  flag: boolean = false  // For Spinner Hide-Show

  constructor(private data: WebServiceCallService) {

    this.flag = true
    this.data.getAllAwardeesData().subscribe(
      response => {
        this.awardees = response
        this.flag = false
      },
      error => {
        this.flag = false
        alert(error);
      }
    )
  }

}
