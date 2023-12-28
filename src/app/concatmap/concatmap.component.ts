import { Component } from '@angular/core';
import { of, map, tap, concatMap, mergeMap } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css'],
})
export class ConcatmapComponent {
  posts!: any[];

  ngOnInit() {
    this.posts = [
      { id: 0, description: 'Apple' },
      { id: 1, description: 'Nokia' },
      { id: 2, description: 'Samsung' },
    ];

    const post$ = of(0, 1, 2).pipe(map((id) => this.getPost(id)));

    const concatPost$ = of(0, 1, 2).pipe(
      tap((id) => console.log(`concatmap source observable: ${id}`)),
      concatMap((id) => this.getPost(id))
    );

    const mergeMap$ = of(0, 1, 2).pipe(
      tap((id) => console.log(`concatmap source observable: ${id}`)),
      mergeMap((id) => this.getPost(id))
    );

    // concatPost$.subscribe((item) =>
    //   console.log('concatmap result: item', item)
    // );
    mergeMap$.subscribe((item) => console.log('mergeMap result: item', item));
  }
  getPost(id: any) {
    return of(this.posts[id]);
  }
}
