import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'creational-operators',
  templateUrl: './creational-operators.component.html',
  styles: [],
})
export class CreationalOperatorsComponent implements OnInit {
  clickObservable: Observable<Event> = fromEvent(document, 'click');

  ngOnInit(): void {
    this.subscribeToObservable();
  }
  private subscribeToObservable() {
    this.clickObservable.subscribe(() => {
      console.log(`of times the user clicked on the screen`);
    });
  }
}
