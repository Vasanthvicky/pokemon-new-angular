import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [MyLibComponent, CounterComponent],
  imports: [
  ],
  exports: [MyLibComponent, CounterComponent]
})
export class MyLibModule { }
