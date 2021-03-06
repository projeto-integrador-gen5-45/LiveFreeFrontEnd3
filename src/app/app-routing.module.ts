import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { ServicoDeleteComponent } from './delete/servico-delete/servico-delete.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { HomeComponent } from './home/home.component';
import { ServicoEditComponent } from './edit/servico-edit/servico-edit.component';
import { SobreComponent } from './sobre/sobre.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [

{path: '', redirectTo:'home', pathMatch: 'full'},

{path: "home", component: HomeComponent},
{path: "menu", component: MenuComponent},

{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent},

{path: 'inicio', component:InicioComponent},
{path: 'categoria', component:CategoriaComponent},

{path: 'categoria-edit/:id', component:CategoriaEditComponent},
{path: 'categoria-delete/:id', component:CategoriaDeleteComponent},
{path: 'servico-edit/:id', component: ServicoEditComponent},
{path: 'servico-delete/:id', component: ServicoDeleteComponent},
{path: 'user-edit/:id', component:UserEditComponent},
{path: 'sobre', component: SobreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
