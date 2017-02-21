import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlockService } from '../block/block.service';
@Component({
    selector: 'seat',
    styleUrls: ['seat.component.scss'],
    templateUrl: 'seat.component.html',
    encapsulation: ViewEncapsulation.None,
    inputs: ['no', 'pname', 'disabled'],
})
export class SeatComponent implements OnInit {
    public no: Number = null;
    public pname: String = null;
    public disabled: Boolean = true;

    onChange($event) {
        this.blockService.pushSeats({ id: $event.target.id, value: this.disabled })

    }

    constructor(private blockService: BlockService) {
    }
    public ngOnInit() {
    }
}


