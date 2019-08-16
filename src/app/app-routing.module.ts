import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'landing/activate', loadChildren: './landing/activate/activate.module#ActivatePageModule' },
  { path: 'landing/create/:id', loadChildren: './landing/create/create.module#CreatePageModule' },
  { path: 'landing/login', loadChildren: './landing/login/login.module#LoginPageModule' },
  { path: 'tabs/tentang', loadChildren: './tentang/tentang.module#TentangPageModule'},
  { path: 'tabs/web', loadChildren: './web/web.module#WebPageModule'},
  { path: 'tabs/panduan', loadChildren: './panduan/panduan.module#PanduanPageModule'},
  { path: 'tabs/grup', loadChildren: './grup/grup.module#GrupPageModule'},
  { path: 'tabs/agenda', loadChildren: './agenda/agenda.module#AgendaPageModule'},
  { path: 'tabs/lokasi', loadChildren: './lokasi/lokasi.module#LokasiPageModule'},
  { path: 'tabs/presensi', loadChildren: './presensi/presensi.module#PresensiPageModule'},
  { path: 'tabs/tab3/aduan', loadChildren: './aduan/aduan.module#AduanPageModule' },
  { path: 'tabs/tab3/tentangapp', loadChildren: './tentangapp/tentangapp.module#TentangappPageModule' },
  { path: 'tabs/tab3/profil', loadChildren: './profil/profil.module#ProfilPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
