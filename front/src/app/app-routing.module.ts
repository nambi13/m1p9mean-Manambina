import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './listusers/listusers.component';
import { AjouterutilisateurComponent } from './ajouterutilisateur/ajouterutilisateur.component';
import { ListeplatComponent } from './listeplat/listeplat.component';
import { AjouterplatComponent } from './ajouterplat/ajouterplat.component';
import { PanierComponent } from './panier/panier.component';
import { ListelivreurComponent } from './listelivreur/listelivreur.component';
import { AjoutlivreurComponent } from './ajoutlivreur/ajoutlivreur.component';
import { ListerestoComponent } from './listeresto/listeresto.component';
import { AjoutrestoComponent } from './ajoutresto/ajoutresto.component';
import { ListerestorateurComponent } from './listerestorateur/listerestorateur.component';
import { AjoutrestorateurComponent } from './ajoutrestorateur/ajoutrestorateur.component';
import { ModifclientComponent } from './modifclient/modifclient.component';
import { ModiflivreurComponent } from './modiflivreur/modiflivreur.component';
import { ModifrestorateurComponent } from './modifrestorateur/modifrestorateur.component';
import { ModifrestoComponent } from './modifresto/modifresto.component';
import { ModifplatComponent } from './modifplat/modifplat.component';
import { ListeplatadminComponent } from './listeplatadmin/listeplatadmin.component';
import { LoginComponent } from './login/login.component';
import { ListecommanderestorateurComponent } from './listecommanderestorateur/listecommanderestorateur.component';
import { DetailplatcommanderComponent } from './detailplatcommander/detailplatcommander.component';
import { BeneficesrestorateurComponent } from './beneficesrestorateur/beneficesrestorateur.component';
import { ListeplatcommandeglobaleComponent } from './listeplatcommandeglobale/listeplatcommandeglobale.component';
import { BeneficesfullComponent } from './beneficesfull/beneficesfull.component';
import { ListeplatalivrerComponent } from './listeplatalivrer/listeplatalivrer.component';
import { DetailcommandeerestoComponent } from './detailcommandeeresto/detailcommandeeresto.component';
import { DetaillivreurComponent } from './detaillivreur/detaillivreur.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
	{ path: 'client', component: ListusersComponent },
  { path: 'ajouterclient', component: AjouterutilisateurComponent },
  { path: 'listeplat', component: ListeplatComponent },
  { path: 'ajouterplat', component: AjouterplatComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'listelivreur', component: ListelivreurComponent },
  { path: 'listeresto', component: ListerestoComponent },
  { path: 'ajouterlivreur', component: AjoutlivreurComponent },
  { path: 'ajouteresto', component: AjoutrestoComponent },
  { path: 'listerestorateur', component: ListerestorateurComponent },
  { path: 'ajoutrestorateur', component: AjoutrestorateurComponent },
  { path: 'client/:id', component: ModifclientComponent },
  { path: 'livreur/:id', component: ModiflivreurComponent },
  { path: 'restorateur/:id', component: ModifrestorateurComponent },
  { path: 'resto/:id', component: ModifrestoComponent },
  { path: 'plat/:id', component: ModifplatComponent },
  { path: 'listeplatadmin', component: ListeplatadminComponent },
  { path: 'listecommanderestorateur', component: ListecommanderestorateurComponent },
  { path: 'detailcommandeplat/:id', component: DetailplatcommanderComponent },
  { path: 'beneficerestorateur', component: BeneficesrestorateurComponent },
  { path: 'listeplatcommande', component: ListeplatcommandeglobaleComponent },
  { path: 'beneficefull', component: BeneficesfullComponent },
  { path: 'platlivrer', component: ListeplatalivrerComponent },
  { path: 'detailcommanderesto/:id', component: DetailcommandeerestoComponent },
  { path: 'detailcommandelivreur/:id', component: DetaillivreurComponent },
  

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
