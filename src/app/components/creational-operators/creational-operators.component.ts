import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'creational-operators',
  templateUrl: './creational-operators.component.html',
  styles: [],
})
export class CreationalOperatorsComponent implements OnInit {
  click = fromEvent(document, 'click');
  counter: number = 0;

  ngOnInit(): void {
    this.click.subscribe(() => {
      this.counter++;
      console.log(`User clicked ${this.counter} times on the screen`);
    });
  }
}
