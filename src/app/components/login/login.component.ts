import { Component, OnInit } from '@angular/core';
import { AppEnums } from 'src/app/models/AppEnums';
import { AppService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.showToastMessage(AppEnums.ToastTypeError, "LOGIN","Kindly Login");
  }

}
