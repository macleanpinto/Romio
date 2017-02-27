import { Component, OnInit } from '@angular/core';
import { NgDataGridModel } from './../datagrid/ng-datagrid.model';
import { PaginationComponent } from './../datagrid/pagination.component';
import { Request } from './inMemory.model';
import './../utils/array.extensions';

@Component({
    selector: 'in-memory-demo',
    templateUrl: 'inMemory.component.html'
})
export class InMemoryComponent implements OnInit {
    table: NgDataGridModel<Request>;
    recentlyRemoveReqs: any[];
    private requestId: number = 0;
    visible: boolean = false;
    public bays = {
        "bayList": [
            {
                "floorNo": 1,
                "bayName": "Bay1"
            },
            {
                "floorNo": 1,
                "bayName": "Bay3"
            }
        ]
    }


    constructor() {
          console.log("hjjhjhjhjhkvdrdtr");
        this.table = new NgDataGridModel<Request>([]);
        for (this.requestId = 0; this.requestId < 25; this.requestId++) {
            let request = {
                "requestId": this.requestId,
                "projectName": "Rhode Island",
                "type": "RAMPUP",
                "status": "Pending",
                "seats": 2,
                "bay": "Bay1",
                "apprvl": "Yes",
                "comment": "Comment1"
            }

            this.table.items.push(new Request(request));
        }

    }

    ngOnInit() { }



    toggle() {
        this.visible = !this.visible;
    }
    removeRecordPlugin(item) {
        this.recentlyRemoveReqs = this.table.items.remove(item);
    }

}
