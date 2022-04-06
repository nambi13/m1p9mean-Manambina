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


@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    AjouterutilisateurComponent,
    ListeplatComponent,
    AjouterplatComponent,
    PanierComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
