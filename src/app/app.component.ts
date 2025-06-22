import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { DATATABLE_CONSTANTS } from './data.constants';
declare var $: any;

export interface Products {
  columns?: Array<{ name: string; prop: string }>;
  data?: Array<{
    id: number;
    name: string;
    price: number;
    categtory: string;
    status: string;
  }>;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'angular-datatable';
  tableConfig: Products = {};
  dtOptions: any = DATATABLE_CONSTANTS.DTOPTIONS;
  showTable: boolean = true;

  ngOnInit() {
    this.tableConfig = JSON.parse(JSON.stringify(DATATABLE_CONSTANTS.PRODUCTS));
  }

  loadDatatable() {
    this.showTable = false;
    setTimeout(() => {
      this.showTable = true;
      this.tableConfig = JSON.parse(
        JSON.stringify(DATATABLE_CONSTANTS.PRODUCTS)
      );
    }, 0);
  }

  /**
   * @param data data object
   * @param column column object
   * @returns value of the column from the data object
   */
  getValue(data, column) {
    if (data && column && data[column.prop]) {
      return data[column.prop];
    }
    return '';
  }
}
