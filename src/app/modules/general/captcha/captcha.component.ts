import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CaptchaService } from '../../../services/captcha.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  captchaForm: FormGroup;
  id: string;
  emptyEmail = false;
  emptyCaptcha = false;
  siteKey: string;

  constructor(
    private formBuilder: FormBuilder,
    private captchaService: CaptchaService,
    private route: ActivatedRoute,
  ) {
    this.captchaForm = formBuilder.group({
      email: '',
      captcha: ''
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === null) {
      this.id = location.pathname.split('/').pop();
    }
    console.log(this.id);
    this.siteKey = environment.siteKey;
  }

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: any[]): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  onSubmit(data): void {
    // this.captchaForm.set = true;
    console.log(data);
    console.log(data.email);
    this.emptyEmail = data.email === '';
    this.emptyCaptcha = data.captcha === '';
    if (!this.emptyEmail && !this.emptyCaptcha) {
      this.captchaService.verifyEmail(data.email, data.captcha, this.id).subscribe(
        res => {
          location.assign('/home');
        },
        error => {
          this.captchaForm.reset();
          console.log('error');
        }
      );
    }
  }
}
