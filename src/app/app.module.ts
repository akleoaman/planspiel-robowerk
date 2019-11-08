import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './entities/top-navbar/top-navbar.component';
import { WelcomeComponent } from './entities/welcome/welcome.component';
import { TeamComponent } from './entities/team/team.component';
import { FooterComponent } from './entities/footer/footer.component';
import { VisionComponent } from './entities/vision/vision.component';
import { MissionComponent } from './entities/mission/mission.component';
import { PurposeComponent } from './entities/purpose/purpose.component';
import { ValueComponent } from './entities/value/value.component';
import { SocialComponent } from './entities/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    WelcomeComponent,
    TeamComponent,
    FooterComponent,
    VisionComponent,
    MissionComponent,
    PurposeComponent,
    ValueComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
