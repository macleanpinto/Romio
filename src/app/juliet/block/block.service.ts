import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// private service shored with only map module MapService
@Injectable()
export class BlockService {
    constructor(private http: Http) {
    }
    public changedSeats: Map<string, boolean>=new Map<string, boolean>();
    public pushSeats(seat) {
        this.changedSeats.set(seat.id,seat.value);
    }
    public getSeats() {
        return (this.changedSeats);
    }

}

