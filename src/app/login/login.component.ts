import {Component, OnInit} from '@angular/core';
import {Account} from "../model/account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }

  accounts: Account[] = [
    {
      account: "admin",
      password: "123456"
    }
  ]

  loginForm = new FormGroup({
    account: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  })

  get account() {
    return this.loginForm.get('account')
  }

  get password() {
    return this.loginForm.get('password')
  }

  check() {
    // @ts-ignore
    if (this.account?.value == this.accounts[0].account & this.password?.value == this.accounts[0].password) {
      alert('Login true')
    } else {
      alert('login fail')
    }
  }
}
