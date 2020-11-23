import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Email {
	id: number
	fk_user: number
	email_sender: string
	email_subject: string
	created_at: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  email:Email;

  constructor(private http: HttpClient) { }
  
  getAllEmails(): Observable<Email[]> {
  //return this.http.get<Email[]>('http://localhost:8000/api/emails',{withCredentials: true})
  return this.http.get<Email[]>('http://37159655a54c.ngrok.io/api/emails',{withCredentials: true})
  }
  
  
  
}
