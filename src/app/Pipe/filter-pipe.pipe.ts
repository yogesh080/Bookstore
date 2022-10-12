import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, args: any) {
    return value.filter((book: any) => {
      return book.bookName.includes(args);

    })

  }

}
