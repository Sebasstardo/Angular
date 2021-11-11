import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe.component';
import { ListadoComponent } from './listado/listado.component';


//las declaraciones dice que componentes contienen el modulos son invisibles
// los exports son las cosas que se quieren hacer publicas o visibles fuera del modulo
// los imports van modulos unicamentes  
//CommonModulo sirve para importar las directivas ngfor y ngIf

@NgModule({

    declarations: [
        heroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
    
})
export class heroesModule {

}