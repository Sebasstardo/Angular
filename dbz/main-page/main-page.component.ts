import { Component, OnInit } from '@angular/core';

interface Personaje {
    nombre: string;
    poder: number;
}

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
    
    //    Arreglo de personajes
    Personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        }, 
        {
            nombre: 'Vegeta',
            poder: 8000
        }
    ]

    nuevo: Personaje = {
        nombre: '',
        poder: 0
    }


    agregar() {
        if (this.nuevo.nombre.trim().length === 0) {
            return;
        }
        //de esta manera se inserta en el arreglo
       this.Personajes.push(this.nuevo)
       
       this.nuevo = {
           nombre: '',
           poder : 0
           
           }
       
    }


}
