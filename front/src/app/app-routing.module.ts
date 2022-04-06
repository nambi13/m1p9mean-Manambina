import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AjouterutilisateurComponent } from './ajouterutilisateur/ajouterutilisateur.component';
import { ListeplatComponent } from './listeplat/listeplat.component';
import { AjouterplatComponent } from './ajouterplat/ajouterplat.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [


	{ path: 'client', component: ListusersComponent },
  { path: 'ajouterclient', component: AjouterutilisateurComponent },
  { path: 'listeplat', component: ListeplatComponent },
  { path: 'ajouterplat', component: AjouterplatComponent },
  { path: 'panier', component: PanierComponent },
  

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
