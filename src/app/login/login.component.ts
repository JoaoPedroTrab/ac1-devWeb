import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user : any;
  pass : any;
  acesso : boolean = true;

  constructor(private router : Router) { }

  validaLogin(){
    if (this.user == 'admin' && this.pass == '123') { 
      this.acesso = true;
      this.router.navigate(['/home']);
    }
    else { 
      this.acesso = false;
    }
  }
}
