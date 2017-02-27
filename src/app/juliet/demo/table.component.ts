import { Component, OnInit } from '@angular/core';
import { InMemoryComponent } from './inMemory.component';


@Component({
    selector: 'table-demo',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
    private recentlyRemoveUsers: any[];
    private recentlyRemoveUsersPluginServer: any[];
    private userId: number = 0;

    constructor() {
    }

   public ngOnInit() { }
}
