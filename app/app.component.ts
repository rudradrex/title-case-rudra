import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Type Something';
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
  public transform(input: string): string {
    console.log(input);
    if (!input) {
      return '';
    } else {
      return input.replace(/\b\w/g, first => first.toLocaleUpperCase());
    }
  }
}
