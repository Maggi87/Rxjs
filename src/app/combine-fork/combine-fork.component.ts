import { Component } from '@angular/core';
import { combineLatest, forkJoin, interval, take } from 'rxjs';

@Component({
  selector: 'app-combine-fork',
  templateUrl: './combine-fork.component.html',
  styleUrls: ['./combine-fork.component.css']
})
export class CombineForkComponent {

  ngOnInit():void{
    const x = interval(1000)
    .pipe(
      take(5)
    )

    const y = interval(2000)
    .pipe(
      take(5)
    )

    combineLatest(x,y).subscribe({
      next: value=>console.log(`value: ${value}`),
      complete :()=>console.log('done')
    })

    forkJoin(x,y).subscribe({
      next: value=>console.log(`value: ${value}`),
      complete :()=>console.log('done')
    })
  }
}
