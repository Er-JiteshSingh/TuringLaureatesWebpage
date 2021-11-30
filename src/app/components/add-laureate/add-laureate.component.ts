import {Component, OnInit} from '@angular/core';
import {WebServiceCallService} from "../../services/web-service-call.service";

@Component({
  selector: 'app-add-laureate',
  templateUrl: './add-laureate.component.html',
  styleUrls: ['./add-laureate.component.css']
})
export class AddLaureateComponent {

  private service: WebServiceCallService;

  constructor(private webService: WebServiceCallService) {
    this.service = this.webService
  }

  onSubmit(data: any) {
    let details = {
      name: "",
      year: "",
      country: "",
      description: "",
      affiliation: "",
      image: ""
    }

    details.name = data.form.value.name
    details.year = data.form.value.year
    details.country = data.form.value.country
    details.description = data.form.value.description
    details.affiliation = data.form.value.affiliation
    details.image = data.form.value.image

    this.service.addAwardee(details).subscribe(
      response => {
        console.log(response)
      },
      error => {
        alert(error);
      })
  }
}
