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

  constructor(private http: HttpClient) { }
  
  getAllEmails(): Observable<Email[]> {
//<<<<<<< Updated upstream
    //return this.http.get<Email[]>('http://localhost:8000/api/emails')
//=======
    return this.http.get<Email[]>('http://23d807666b40.ngrok.io/api/emails')
//>>>>>>> Stashed changes
  }
  
  
  
}
