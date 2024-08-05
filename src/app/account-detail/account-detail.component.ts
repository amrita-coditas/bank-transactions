import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountDetails } from './../account-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.scss',
})
export class AccountDetailComponent implements OnInit {
  userAccount: any;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    const id = this._router.url.split('/')[2];
    const userArray = accountDetails.find(
      (account) => account.account_id === id
    );

    this.userAccount = userArray;
  }
}
