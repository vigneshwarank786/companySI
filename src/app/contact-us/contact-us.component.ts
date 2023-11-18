import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formData: FormData = {
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  };

  formSubmitted = false;

  constructor(private http: HttpClient) {}

  submitForm(): void {
    this.http.post<any>('send-email2.php', this.formData).subscribe(
      response => {
        console.log('Form submission successful:', response);
        this.resetFormDataAndFlags();
      },
      error => {
        console.error('Form submission error:', error);
      }
    );
  }

  resetFormDataAndFlags(): void {
    this.formData = {
      name: '',
      email: '',
      mobile: '',
      service: '',
      message: ''
    };
    this.formSubmitted = true;
  }
}
