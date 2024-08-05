import { CommonModule } from '@angular/common';
import { accountDetails } from './../account-details';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userAccountDetails: any;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.userAccountDetails = accountDetails;
    console.log('user account details', this.userAccountDetails);
  }

  openAccountDetails(id: string) {
    console.log(id);
    this._router.navigate(['/account/' + id]);
  }
}
