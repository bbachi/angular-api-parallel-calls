import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, map } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(private appService: AppService) {

  }

  users: any[] = [];

  ngOnInit() {
    forkJoin({
      users: this.appService.getUsers(),
      contacts: this.appService.getContacts(),
      addresses: this.appService.getAddresses()
    })
    .pipe(
      map(response => {
        const users = <Array<any>>response.users;
        const contacts = <Array<any>>response.contacts;
        const addresses = <Array<any>>response.addresses;
        const result: any[] = [];
        users.map((user: any) => {
          result.push({
            ...user, 
            ...contacts.find((contact: any) => contact.userId === user.userId), 
            ...addresses.find((address: any) => address.userId === address.userId)})
        });

        console.log("result ", result)
        return result;
      })
    )
    .subscribe((data) => {
      console.log(data)
      this.users = data;
    });
  }
}