import { Component, OnInit, Input } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenu } from '../../models/sidebar-menu';

@Component({
    selector: 'app-ng2a-sidebar',
    templateUrl: './ng2a-sidebar.component.html',
    providers: [SidebarService],
    styleUrls: ['./ng2a-sidebar.component.css']
})


export class Ng2aSidebarComponent implements OnInit {

    @Input() top: number;
    
    errorMessage: string;
    model: SidebarMenu;
    //structure: string;    
    sub: any;

    constructor(
        private sidebarService: SidebarService,
        private router: Router,
        private route: ActivatedRoute
        ) {        
    }

    ngOnInit() {
        if (!this.model) {
            this.loadSidebar();
        }
    }

    loadSidebar() {
        this.sub = this.route.params.subscribe(params => {
            let id = 1;
            this.getSidebarMenu(Number(id));
        });
    }
        
    getSidebarMenu(id: number) {
        this.sidebarService.getSidebarMenu(id)
            .subscribe(
            model => {
                this.model = model[0];
            },
            error => this.errorMessage = <any>error);
    }
}

