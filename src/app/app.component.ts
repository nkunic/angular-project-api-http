import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  data:any=[];

  constructor(private user: UsersService) {
    this.user.getData().subscribe((data) => {
      console.warn(data);
      this.data=data;
    });
  }
  
}
