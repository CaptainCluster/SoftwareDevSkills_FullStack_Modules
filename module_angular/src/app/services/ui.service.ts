import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showaddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showaddTask = !this.showaddTask;
    this.subject.next(this.showaddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
