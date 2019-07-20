import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'web', loadChildren: './web/web.module#WebPageModule' },
  { path: 'panduan', loadChildren: './panduan/panduan.module#PanduanPageModule' },
  { path: 'tentang', loadChildren: './tentang/tentang.module#TentangPageModule' },
  { path: 'grup', loadChildren: './grup/grup.module#GrupPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'lokasi', loadChildren: './lokasi/lokasi.module#LokasiPageModule' },
  { path: 'presensi', loadChildren: './presensi/presensi.module#PresensiPageModule' },
  { path: 'detail', loadChildren: './panduan/detail/detail.module#DetailPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
