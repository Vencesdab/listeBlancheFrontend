import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CaptchaService } from '../../../services/captcha.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private captchaService: CaptchaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.captchaForm = formBuilder.group({
      email: '',
      captcha: ''
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
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
          console.log(res);
          console.log('ir a otra pagina');
          this.router.navigate(['']);
        },
        error => {
          this.captchaForm.reset();
          console.log('error');
        }
      );
    }
  }
}
