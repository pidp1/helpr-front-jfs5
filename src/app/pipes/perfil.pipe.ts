import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'perfil'
})
export class PerfilPipe implements PipeTransform {

transform(value: string | undefined): string {
    if(value == undefined || value == null || value == "") {
return "assets\avatarpipe\imgperfil.png";
    }
    return value;
}
}