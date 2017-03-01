import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockService } from './block.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
@Component({
    selector: 'block',
    styleUrls: ['block.component.scss'],
    templateUrl: 'block.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [BlockService]
})
export class BlockComponent implements OnInit {
    private seats;
    private bayName: String;
    private type: String;
    private requestId: number;
    private rampDown: Boolean = false;
    constructor(private service: BlockService, private route: ActivatedRoute, private http: Http, private parentRouter: Router) {


    }
    private assigSeats(response) {
        this.seats = response.privateSeats;
        console.log(this.seats);
    }

    private onSubmit() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        let seatInfoList: {
            seatNo: String,
            isSelected: Boolean
        }[] = [];
        let i = 0;
        this.service.getSeats().forEach((value: boolean, key: string) => {
            console.log(key, value);
            seatInfoList[i] = { seatNo: key, isSelected: value };
            i++;
        });


        let body = JSON.stringify({
            "requestId": this.requestId,
            "finalList": seatInfoList
        });
        this.http.post('http://localhost:8080/saveSeatDetails', body, { headers: headers })
            .subscribe(
            (response) => {
                alert(response.json().message);

            }, //For Success Response
            err => { console.error(err) } //For Error Response
            );
    }
    public ngOnInit() {

        this.bayName = this.route.snapshot.params["bayName"];
        this.type = this.route.snapshot.params["type"];
        this.requestId = this.route.snapshot.params["requestId"];
        if (this.type == "RAMDOWN") {
            this.rampDown = true;
        }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        let body = JSON.stringify({
            "requestId": this.requestId,
            "bay": this.bayName
        });
        this.http.post('http://localhost:8080/getSeatDetails', body, { headers: headers })
            .subscribe(
            (response) => {
                this.assigSeats(response.json());
            }, //For Success Response
            err => { console.error(err) } //For Error Response
            );




    }
}


