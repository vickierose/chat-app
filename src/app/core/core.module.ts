import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { NavComponent } from './nav';
import { HeaderComponent } from './header';
// import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ],
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  providers: [
    // AuthService
    ]
})

export class CoreModule {}