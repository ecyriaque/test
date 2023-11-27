import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { DashboardHomeComponent } from "./components/dashboard-home/dashboard-home.component";

const routes: Routes = [
    { path: '', component: DashboardHomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule { }