import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'form',
  styleUrls: ['form.component.scss'],
  templateUrl: 'form.component.html'
})
export class FormComponent {
  private visible: Boolean = false;
  private projectName: String;
  private numSeats: Number;
  private projectManager: String;
  private projectDirector: String;
  private sDate: String;
  private eDate: String;
  private comments: String;

  constructor(private http: Http) {


  }

  private onClick($event) {
    if ($event.target.value == "newrequest") {
      this.visible = false;
    }
    else {
      this.visible = true;

    }
  }

  private onSave() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    let body = JSON.stringify({
      "projectName": this.projectName,
      "projectManagerEmailId": this.projectManager,
      "projectDirectorEmailId": this.projectDirector,
      "projectStartDate": this.sDate,
      "projectEndDate": this.eDate
    });

    this.http.post('http://localhost:8080/newProject', body, { headers: headers })
      .subscribe(
      (response) => { console.log(response.json()) }, //For Success Response
      err => { console.error(err) } //For Error Response
      );

    body = JSON.stringify({
      "projectId": 1,
      "typeOfRequest": "RAMPUP",
      "noOfSeats": this.numSeats,
      "preferredBay": "Bay1",
      "leadershipApprvl": "Yes",
      "requestComment": this.comments
    });

    this.http.post('http://localhost:8080/newRequest', body, { headers: headers })
      .subscribe(
      (response) => { console.log(response.json()) }, //For Success Response
      err => { console.error(err) } //For Error Response
      );


    alert("SuccesFully Submited");
  }
}
