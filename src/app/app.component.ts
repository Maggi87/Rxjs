import { Component } from '@angular/core';
import {of, from} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit():void{
    of(2,4,6).subscribe(x=>console.log(x));

    from([20,15,10]).subscribe(
      next => console.log(`resulting item... ${next}`),
      error => console.log(`error occured ${error}`),
      () => console.log('done')
    );
  }

}
