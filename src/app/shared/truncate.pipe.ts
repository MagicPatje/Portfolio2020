import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // transform(value: string, args: any[]): string {
  //   const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
  //   const trail = args.length > 1 ? args[1] : '...';
  //   return value.length > limit ? value.substring(0, limit) + trail : value;
  //  }

   transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
