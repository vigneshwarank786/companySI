import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  service: string;
}

@Component({
  selector: 'app-page-contactus',
  templateUrl: './page-contactus.component.html',
  styleUrls: ['./page-contactus.component.css']
})
export class PageContactusComponent {
  formData: FormData = {
    name: '',
    email: '',
    mobile: '',
    service: ''
  };

  constructor(private http: HttpClient) {}

  submitForm(): void {
    this.http.post<any>('send-email1.php', this.formData)
      .subscribe(
        response => {
          console.log('Form submission successful:', response);
          // Handle success - perhaps show a success message to the user
        },
        error => {
          console.error('Form submission error:', error);
          // Handle error - display an error message or notify the user
        }
      );
  }
}
