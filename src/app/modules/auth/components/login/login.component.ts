import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {StorageService} from "../../../../core/services/storage.service";

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup = new FormGroup({});

  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);
  private readonly storageService: StorageService = inject(StorageService);

  ngOnInit(): void {
    this.createForm();
  }

  public   onSubmit() {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      if (email === 'admin@admin.com' && password === 'admin') {
        this.router.navigate(['/welcome']);
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }

  private createForm(): void {
    const emailRemembered: string = this.storageService.get('email');
    this.authForm = this.formBuilder.group({
      email: new FormControl(emailRemembered || '', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      remember: new FormControl(!!emailRemembered),
    });
  }
}
