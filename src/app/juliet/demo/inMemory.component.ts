import { Component, OnInit, NgZone } from '@angular/core';
import { NgDataGridModel } from './../datagrid/ng-datagrid.model';
import { PaginationComponent } from './../datagrid/pagination.component';
import { Request } from './inMemory.model';
import './../utils/array.extensions';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'in-memory-demo',
    templateUrl: 'inMemory.component.html'
})
export class InMemoryComponent implements OnInit {
    table: NgDataGridModel<Request>;
    recentlyRemoveReqs: any[];
    private requestId: number = 0;
    visible: boolean = false;
    private bays;

    setBays(response) {
        this.bays = response;
        console.log(this.bays);
    }

    getBays(requestId) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        let body = JSON.stringify({
            "requestId": requestId
        });
        this.http.post('http://localhost:8080/getBays', body, { headers: headers })
            .subscribe(
            (response) => { this.zone.run(() => { this.setBays(response.json()); }); }, //For Success Response
            err => { console.error(err) } //For Error Response
            );

    }
    setTableData(response) {
        for (let request of response.requestList) {
            this.table.items.push(new Request({
                "requestId": request.requestId,
                "projectName": request.project.projectName,
                "type": request.typeOfRequest,
                "status": request.requestStatus,
                "seats": request.noOfSeats,
                "bay": request.preferredBay,
                "apprvl": request.leadershipApprvl,
                "comment": request.requestComment
            }));

        }

    }

    constructor(private http: Http, private zone: NgZone) {
        this.getBays("1");
        this.table = new NgDataGridModel<Request>([]);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        let body = JSON.stringify({
        });
        this.http.post('http://localhost:8080/getAllRequests', body, { headers: headers })
            .subscribe(
            (response) => { this.zone.run(() => { this.setTableData(response.json()); }); }, //For Success Response
            err => { console.error(err) } //For Error Response
            );


    }

    ngOnInit() { }



    process(requestId) {
        this.getBays(requestId);
        this.visible = !this.visible;
    }
    removeRecordPlugin(item) {
        this.recentlyRemoveReqs = this.table.items.remove(item);
    }

}
