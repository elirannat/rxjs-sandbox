import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'pipeable-operators',
  templateUrl: './pipeable-operators.component.html',
  styles: [],
})
export class PipeableOperatosComponent implements OnInit {
  users$: Observable<User> = from([
    {
      _id: '1',
      firstName: 'Eliran',
      lastName: 'Natan',
      age: 36,
      phone: '0559999339',
      email: 'admin@pc-solutions.co.il',
    },
    {
      _id: '2',
      firstName: 'Mor',
      lastName: 'Shemesh',
      age: 22,
      phone: '0522000000',
      email: 'morsh316@gmail.com',
    },
    {
      _id: '3',
      firstName: 'Ifat',
      lastName: 'Shemesh',
      age: 49,
      phone: '0524000000',
      email: 'ifatsh1973@gmail.com',
    },
  ]);

  users: Array<User> = [];
  user: User | void = undefined;

  getUser(id: string) {
    this.users$
      .pipe(filter((user: User) => user._id === id))
      .subscribe((data) => {
        this.users.push(data);
      });
  }

  ngOnInit(): void {
    this.getUser('1');
    // this.getUser('2');
    // this.getUser('3');
  }
}
