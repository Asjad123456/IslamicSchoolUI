import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchTeacherPipe'
})
export class SearchTeacherPipe implements PipeTransform {


  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => item.userName.toLowerCase().includes(searchText));
  }

}
