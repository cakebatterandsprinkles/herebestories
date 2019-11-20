import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signUpForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.checkWidth();

    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    const controls = this.signUpForm.controls;
    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      console.log(this.signUpForm.errors);
      return;
    } else if (controls.password.value !== controls.password2.value) {
      this.error = 'Passwords don\'t match!';
    } else {
      this.loading = true;
      this.userService.signUp(controls.firstName.value, controls.lastName.value,
        controls.username.value, controls.email.value, controls.password.value)
        .subscribe(
          data => {
            this.router.navigate(['/login']);
          },
          error => {
            this.loading = false;
            console.log(error);
            this.error = error.errors[0].msg;
          });
    }
  }

  @HostListener('window:resize')
  checkWidth() {

    const background = document.querySelector('.login-container');

    const window: number = document.body.clientWidth;
    if (window > 768) {
      background.classList.add('bgsignup');
      background.classList.remove('bg-none');
    } else {
      background.classList.remove('bgsignup');
      background.classList.add('bg-none');
    }
  }
}
