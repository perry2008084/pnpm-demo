import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib-a',
  template: `
    <p>
      lib-a works!
      test
    </p>

    <lib-lib-b></lib-lib-b>
  `,
  styles: [
  ]
})
export class LibAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
