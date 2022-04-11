import { Component  } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right: 7px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa' ,'americas' , 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  //inyectar servicio
  constructor( private PaisService: PaisService) { }

  getClaseCSS( region: string): string {
    return( region === this.regionActiva) ? 'btn btn-prymary': 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if( region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.PaisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises);

    //TODO: hacer el llamado al servicio
  }

}
