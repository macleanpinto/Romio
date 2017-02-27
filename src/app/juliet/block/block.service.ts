import { Injectable } from '@angular/core';
// private service shored with only map module MapService
@Injectable()
export class BlockService {
    public changedSeats: { [key: string]: string; } = {};
    public pushSeats(seat) {
        this.changedSeats[seat.id] = seat.value;
    }
    public sendData() {
        console.log(this.changedSeats);
    }
    public getBlockData(block: String) {

        return [{
            seats: [
                {
                    no: '1A',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1B',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1C',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1D',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1E',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1F',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1G',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1H',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1I',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '1J',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
            ]


        }, {
            seats: [
                {
                    no: '2A',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    disabled: true
                },
                {
                    no: '2B',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '2C',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '2D',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '2E',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '2F',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '2G',
                    pname: 'RI',
                    ename: 'Maclean Pinto',
                    disabled: true
                },
                {
                    no: '2H',
                    disabled: false
                },
                {
                    no: '2I',
                    disabled: false
                },
                {
                    no: '2J',
                    disabled: false
                },
            ]


        }];

    }
}

