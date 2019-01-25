import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { MyFirstServiceService } from './services/my-first-service.service';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './game/sidebar/sidebar.component';
import { FieldComponent } from './game/field/field.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MenuComponent,
    SidebarComponent,
    FieldComponent,
    NotFoundPageComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [MyFirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
