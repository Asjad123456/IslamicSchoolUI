import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchclass'
})
export class SearchclassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
