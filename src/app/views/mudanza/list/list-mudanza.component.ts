// Componentes
import { Component, ViewChild, OnInit } from '@angular/core';
import { APIENDPOINT } from '../../../config/configuration';
import { Subscription } from "rxjs/Subscription";
import { OnDestroy } from "@angular/core";
import * as _ from 'underscore';
import * as $ from 'jquery';

// Constants

// Modelos
import { PaginatioResponseModel } from 'app/shared/models/common/pagination-response.model';
import { PaginationModel } from 'app/shared/models/common/pagination.model';

// Servicios

import { ToastrService } from 'ngx-toastr';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Router } from '@angular/router';
import { MoveModel } from 'app/shared/models/mudanza/mudanza.model';

@Component(
    {
        templateUrl: 'list-mudanza.component.html',
 
    }
)
export class ListMudanzaComponent implements OnInit {
    @ViewChild('empleadoTable')   empleadoTable: DataTable;

    paginationModel: PaginationModel = new PaginationModel();
    results: PaginatioResponseModel<MoveModel[]> = new PaginatioResponseModel<MoveModel[]>();
    cols: any[];
    totalRecords: number;

    constructor(
        //private _repositorioService: RepositorioService,
 
        private _toastrService: ToastrService,
        private _router: Router
    ) {
        
        this.results.list = [];

        this.paginationModel.pageNumber = 1;
        this.paginationModel.pageSize = 10;
        this.paginationModel.sortProperty = 'empleadoId';
        this.paginationModel.sortType = 'empleadoId';
        this.paginationModel.sortType = 'asc';
     }

    ngOnInit() {

        this.cols = [
            { field: 'idUser', header: 'Id Usuario' },
        ];
        // this.getAll();
    }

    getAll(filters: any = null) {
        if (filters != null) {
            this.paginationModel.filters = filters;
        }

    }

    loadLazy(event: LazyLoadEvent) {
      
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
    }
}