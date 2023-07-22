import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceProvidedModule } from './service-provided/service-provided.module';
import { ServiceProvidedService } from './service-provided.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
import { UserService } from './user.service';
import { SignupModule } from './signup/signup.module';
import { UsersModule } from './users/users.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    UsersModule,
    ServiceProvidedModule,
    FormsModule,
    SignupModule,
  ],
  providers: [
    ClientsService,
    ServiceProvidedService,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
