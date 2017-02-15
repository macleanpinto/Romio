import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
    selector: 'dragula-app',
    styleUrls: ['dragula.component.css'],
    templateUrl: 'dragula.component.html',
    viewProviders: [DragulaService],
    encapsulation: ViewEncapsulation.None
})
export class DragulaComponent implements OnInit {
    constructor() { }
    public ngOnInit() {
    }
}


