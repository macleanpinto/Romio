export class Request {
    public requestId: number;
    public projectName: String;
    public type: string;
    public status: string;
    public seats: number;
    public bay: String;
    public apprvl: String;
    public comment: String;

    constructor(obj) {
        for (var prop in obj) {
            this[prop] = obj[prop];
        }
    }

}