//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule}from "@angular/router";

//Import components
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { Route } from "@angular/router";

//Array de configuracion de las rutas
const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'zapatillas',component:ZapatillasComponent},
    {path:'videojuego',component:VideojuegoComponent},
    {path:'cursos/:nombre',component:CursosComponent},
    {path:'**',component:HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes);