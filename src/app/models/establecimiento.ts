export class Establecimiento {
    id: string;
    nombre: string;
    direccion:string;
    longitud: number;
    latitud: number;
    categorias: string[];
    urlMenu: string;

    constructor( id: string,nombre: string, direccion:string, longitud: number, latitud: number,categorias: string[], urlMenu: string){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.longitud = longitud;
        this.latitud = latitud;
        this.categorias = categorias;
        this.urlMenu = urlMenu;
    }
}
