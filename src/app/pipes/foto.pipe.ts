import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foto'
})
export class FotoPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if(value == undefined || value == null || value == "") {
return "\assets\imgfoto\imgfoto.png";
    }
    return value;
}
}
