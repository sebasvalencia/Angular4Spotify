import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    let noimage = 'assets/img/noimage.png';

    //verificar si existe imagen
    if (!imagenes) {
      return noimage;
    }

    //Hay arreglo de imagen solo regrese la img de la posicion 1
    return (imagenes.length > 0) ? imagenes[1].url : noimage;
  }

}
