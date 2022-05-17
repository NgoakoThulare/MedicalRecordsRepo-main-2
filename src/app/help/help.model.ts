export class Help {
    files: any;
    name: string;
    subject: string;
    body: string;

    constructor (files: any, name: string, subject: string, body: string) {
        this.files = files;
        this.name = name;
        this.subject = subject;
        this.body = body;
    }
}