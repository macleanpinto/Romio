import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockService } from './block.service';
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
    constructor(private service: BlockService, private route: ActivatedRoute) {
        this.seats = this.service.getBlockData('A');


    }
    private onSubmit() {
        this.service.sendData();
    }
    public ngOnInit() {

        this.bayName = this.route.snapshot.params["bayName"];
        this.type = this.route.snapshot.params["type"];
    }
}


