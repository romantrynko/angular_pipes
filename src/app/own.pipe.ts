import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'own'
})
export class OwnPipe implements PipeTransform {

  transform(value: string, start: string, end: string, ...args: string[]): string {
    const result = start + value + end;
    console.log(args);
    return result;
  }

}
