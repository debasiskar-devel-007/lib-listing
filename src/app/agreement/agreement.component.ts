import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router, Route} from "@angular/router";
import {ModalComponent} from "../modal/modal.component";
import { ApiService } from '../../app/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
fullname: string;
public endpoint = 'addorupdatedata';
  constructor(public modal: MatDialog, public apiservice: ApiService,public cookieService:CookieService, public router: Router) {
      console.log('id-- '+this.cookieService.get('id'));
  }
  openDialog(){
    const dialogRef = this.modal.open(ModalComponent);{
        data: {myForm : this.fullname}
      }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.fullname = result;
      console.log('this.myForm');
      console.log(this.fullname);
    });
  }

  ngOnInit() {
  }
    onAgreement() {
      console.log(this.fullname);
      let data = {
          shatterblok_sign: this.fullname,
          shatterblok_agreement_date: new Date().getTime(),
          status: 3,
          id: this.cookieService.get('id')
      };
      let data1 = {data: data,source:'users'};
      console.log(data);
      this.apiservice.postData(this.endpoint, data1).subscribe( res => {
          let result: any = {};
          result = res;
          console.log('result');
          console.log(result);
          if (result.status == 'success') {
              this.router.navigate(['/audioseadlineagreement'])
          } else {
              console.log('Ooops!!!');
              this.router.navigate(['/#']);
          }
      })
    }

}



