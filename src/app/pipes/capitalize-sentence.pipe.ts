import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeSentence',
})
export class CapitalizeSentencePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // changes a string to uppercase for the first word
    let firstLetterInAWord = value.substr(0, 1).toUpperCase();
    return firstLetterInAWord + value.substr(1);
  }
}
