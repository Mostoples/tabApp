import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'web',
        children: [
          {
            path: '',
            loadChildren: '../web/web.module#WebPageModule'
          }
        ]
      },
      {
        path: 'panduan',
        children: [
          {
            path: '',
            loadChildren: '../panduan/panduan.module#PanduanPageModule'
          }
        ]
      },
      {
        path: 'tentang',
        children: [
          {
            path: '',
            loadChildren: '../tentang/tentang.module#TentangPageModule'
          }
        ]
      },
      {
        path: 'grup',
        children: [
          {
            path: '',
            loadChildren: '../grup/grup.module#GrupPageModule'
          }
        ]
      },
      {
        path: 'agenda',
        children: [
          {
            path: '',
            loadChildren: '../agenda/agenda.module#AgendaPageModule'
          }
        ]
      },
      {
        path: 'lokasi',
        children: [
          {
            path: '',
            loadChildren: '../lokasi/lokasi.module#LokasiPageModule'
          }
        ]
      },
      {
        path: 'presensi',
        children: [
          {
            path: '',
            loadChildren: '../presensi/presensi.module#PresensiPageModule'
          }
        ]
      },
      {
        path: 'detail',
        children: [
          {
            path: '',
            loadChildren: '../panduan/detail/detail.module#DetailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
