import { Component } from '@angular/core';
import {of, from, tap, map, take} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit():void{
    // of(2,4,6).subscribe(x=>console.log(x));

    // from([20,15,10,5]).subscribe(
    //   next => console.log(`resulting item... ${next}`),
    //   error => console.log(`error occured ${error}`),
    //   () => console.log('done')
    // );


    // of('Orange','Banna','Apple').subscribe(
    //   next => console.log(`resulting item... ${next}`),
    //   error => console.log(`error occured ${error}`),
    //   () => console.log('done')
    // );

    from([20,15,10,5])
    .pipe(
      tap(item => console.log(`emitted item... ${item}`)), // used for debugging
      // take(2),
      map((item: any) => item * 2),
      map((item: any) => item - 10),
      map((item) => {
        if(item === 0){
          throw new Error('0 is detected')
        }
        return item;
      }),
      take(2)      
    )
    .subscribe(
      next => console.log(`resulting item... ${next}`),
      error => console.log(`error occured ${error}`),
      () => console.log('done')
    );
  }
}
