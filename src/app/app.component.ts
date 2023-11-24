import { Component, inject } from '@angular/core';
import { CounterService } from 'src/store/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-zustand';
  private counterService = inject(CounterService);
  store$ = this.counterService.useStore();
}
