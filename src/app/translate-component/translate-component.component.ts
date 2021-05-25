import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.css'],
  animations: [trigger('box', [
    state('start', style({ background: 'blue' })),
    state('end', style({
      background: 'red', transform: 'scale(1.2)'
    })),
    state('special', style({
      background: 'orange',
      transform: 'scale(0.7)',
      borderRadius: '50%'
    })),
    transition('start=>end', animate(350)),
    transition('end=>start', animate('400ms ease-in-out')),
    transition('*<=>special', [
      group([
        query('h2', animate(1000, style({ fontSize: '35px' }))),
        style({ background: 'black' }),
        animate(1000, style({ background: 'grey' }))
      ])
    ]),
    transition(':enter', [
      animate('4s', keyframes([
        style({ background: 'red', offset: 0 }),
        style({ background: 'blue', offset: 0.2 }),
        style({ background: 'orange', offset: 0.3 }),
        style({ background: 'yellow', offset: 1 })
      ]))
      // style({ opacity: 0 }),
      // animate('850ms ease-out')
    ]),
    transition(':leave', [      //*=>void leave   void => * enter
      style({ opacity: 1 }),
      group([
        animate(700,
          style({ opacity: 0, transform: 'scale(1.2)' })
        ),
        animate(750,
          style({ color: '#000', fontWeight: 'bold' })
        )
      ])
    ])
  ])
  ]
})
export class TranslateComponentComponent implements OnInit {
  boxState = 'start';
  visible: boolean = true;
  myControl = new FormControl();
  options: string[] = ['one', 'two', 'three'];
  filteredOptions!: Observable<string[]>
  constructor(public translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  setActiveLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animateSpec() {

  }
}
