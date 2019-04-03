import { OnInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
export declare class ListingComponent implements OnInit {
    datasourceval: any;
    datasource: any;
    displayedColumns: string[];
    dataSource: MatTableDataSource<{}>;
    sort: MatSort;
    paginator: MatPaginator;
    ngOnInit(): void;
    createData(point: any): {};
    applyFilter(filterValue: string): void;
}
