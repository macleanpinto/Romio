import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlockService } from '../block/block.service';
@Component({
    selector: 'seat',
    styleUrls: ['seat.component.scss'],
    templateUrl: 'seat.component.html',
    encapsulation: ViewEncapsulation.None,
    inputs: ['no', 'pname', 'disabled', 'rampDown'],
})
export class SeatComponent implements OnInit {
    public no: Number = null;
    public pname: String = null;
    public disabled: Boolean;
    private rampDown: boolean;

    private onChange($event) {
        this.blockService.pushSeats({ id: $event.target.id, value: $event.target.checked });

    }

    constructor(private blockService: BlockService) {
    }
    public ngOnInit() {
    }
}


