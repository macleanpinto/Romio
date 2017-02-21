import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BlockService} from './block.service';
@Component({
    selector: 'block-app',
    styleUrls: ['block.component.scss'],
    templateUrl: 'block.component.html',
    encapsulation: ViewEncapsulation.None,
    providers:[BlockService]
})
export class BlockComponent implements OnInit {
    private seats;
    constructor(private service : BlockService) {
        this.seats=this.service.getBlockData('A');
    }
    onSubmit()
    {
     this.service.sendData();
    }
    public ngOnInit() {
        
    }
}


