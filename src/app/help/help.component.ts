import { Help } from './help.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http'
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  fileName = '';
  base64: any;
  base64string = '';
  files: any = [];
  uploadProgress = 0;
  uploadSub: Subscription = new Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64 = reader.result;
        this.base64string = this.base64.split(',')[1];
          console.log(this.base64string);

          this.fileName = file.name;

          this.files.push(this.base64string);
          const fileUpload: Help = {
            files: this.files,
            name: this.fileName,
            subject: "Test",
            body: "Dear Sir/Madam - Kindly find the files attached."
          }; 
  
          const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          }
          
          this.http
                .post("https://localhost:5001/Email", JSON.stringify(fileUpload), httpOptions).subscribe(
                results => {
                console.log(results)
          })
      };
    }
}
}
