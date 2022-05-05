import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'segmented-control', pathMatch: 'full' },
  {
    path: 'segmented-control',
    data: { name: 'Segmented control' },
    loadChildren: () =>
      import('./segmented-control/segmented-control.module').then(
        (m) => m.SegmentedControlModule
      ),
  },
  {
    path: 'dropdown',
    data: { name: 'Dropdown' },
    loadChildren: () =>
      import('./dropdown/dropdown.module').then((m) => m.DropdownModule),
  },
  {
    path: 'charts',
    data: { name: 'Charts' },
    loadChildren: () =>
      import('./green-charts/green-charts.module').then(
        (m) => m.GreenChartsModule
      ),
  },
  {
    path: 'datepicker',
    data: { name: 'Datepicker' },
    loadChildren: () =>
      import('./datepicker/datepicker.module').then((m) => m.DatepickerModule),
  },
  {
    path: 'card',
    data: { name: 'Card' },
    loadChildren: () => import('./card/card.module').then((m) => m.CardModule),
  },
  { path: '**', redirectTo: 'buttons' },
]

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  relativeLinkResolution: 'legacy',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
