import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { Ng2aSidebarComponent } from './components/ng2a-sidebar/ng2a-sidebar.component';


const routes: Routes = [
    { path: '', component: Ng2aSidebarComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }