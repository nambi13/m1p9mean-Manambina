import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AjouterutilisateurComponent } from './ajouterutilisateur/ajouterutilisateur.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ListeplatComponent } from './listeplat/listeplat.component';
import { AjouterplatComponent } from './ajouterplat/ajouterplat.component';
import { PanierComponent } from './panier/panier.component';
import { ListelivreurComponent } from './listelivreur/listelivreur.component';
import { AjoutlivreurComponent } from './ajoutlivreur/ajoutlivreur.component';
import { ListerestoComponent } from './listeresto/listeresto.component';
import { AjoutrestoComponent } from './ajoutresto/ajoutresto.component';
import { ListerestorateurComponent } from './listerestorateur/listerestorateur.component';
import { AjoutrestorateurComponent } from './ajoutrestorateur/ajoutrestorateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { NavbarclientComponent } from './navbarclient/navbarclient.component';
import { FootbarComponent } from './footbar/footbar.component';
import { NavbardeconnexionComponent } from './navbardeconnexion/navbardeconnexion.component';
import { BasComponent } from './bas/bas.component';
import { NavbarestorateurComponent } from './navbarestorateur/navbarestorateur.component';
import { NavbarerestoComponent } from './navbareresto/navbareresto.component';
import { DetailcommandeerestoComponent } from './detailcommandeeresto/detailcommandeeresto.component';
import { DetaillivreurComponent } from './detaillivreur/detaillivreur.component';
import { NavbarlivreurComponent } from './navbarlivreur/navbarlivreur.component';




@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AjouterutilisateurComponent,
    ListeplatComponent,
    AjouterplatComponent,
    PanierComponent,
    ListelivreurComponent,
    AjoutlivreurComponent,
    ListerestoComponent,
    AjoutrestoComponent,
    ListerestorateurComponent,
    AjoutrestorateurComponent,
    ModifclientComponent,
    ModiflivreurComponent,
    ModifrestorateurComponent,
    ModifrestoComponent,
    ModifplatComponent,
    ListeplatadminComponent,
    LoginComponent,
    ListecommanderestorateurComponent,
    DetailplatcommanderComponent,
    BeneficesrestorateurComponent,
    ListeplatcommandeglobaleComponent,
    BeneficesfullComponent,
    ListeplatalivrerComponent,
    NavbarclientComponent,
    FootbarComponent,
    NavbardeconnexionComponent,
    BasComponent,
    NavbarestorateurComponent,
    NavbarerestoComponent,
    DetailcommandeerestoComponent,
    DetaillivreurComponent,
    NavbarlivreurComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
