import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
declare var $: any;

export interface Products {
  columns: Array<{ name: string; prop: string }>;
  data: Array<{
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
  dtOptions: Config = {
    pagingType: 'full_numbers',
    paging: true,
    lengthMenu: [5, 10, 15, 20, 25],
    pageLength: 5,
    ordering: true,
    order: [[0, 'asc']],
    language: {
      search: 'Search',
    },
  };
  dtTrigger: Subject<any> = new Subject();
  tableConfig: Products = {
    columns: [
      { name: 'ID', prop: 'id' },
      { name: 'Name', prop: 'name' },
      { name: 'Price', prop: 'price' },
      { name: 'Categtory', prop: 'categtory' },
      { name: 'Status', prop: 'status' },
    ],
    data: [
      {
        id: 1,
        name: 'Cricket',
        price: 100,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 2,
        name: 'Football',
        price: 150,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 3,
        name: 'Tennis',
        price: 200,
        categtory: 'Sports',
        status: 'Unavailable',
      },
      {
        id: 4,
        name: 'Basketball',
        price: 250,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 5,
        name: 'Baseball',
        price: 300,
        categtory: 'Sports',
        status: 'Unavailable',
      },
      {
        id: 6,
        name: 'Hockey',
        price: 350,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 7,
        name: 'Golf',
        price: 400,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 8,
        name: 'Rugby',
        price: 450,
        categtory: 'Sports',
        status: 'Unavailable',
      },
      {
        id: 9,
        name: 'Volleyball',
        price: 500,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 10,
        name: 'Badminton',
        price: 550,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 11,
        name: 'Table Tennis',
        price: 600,
        categtory: 'Sports',
        status: 'Unavailable',
      },
      {
        id: 12,
        name: 'Cricket',
        price: 650,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 13,
        name: 'Football',
        price: 700,
        categtory: 'Sports',
        status: 'Available',
      },
      {
        id: 14,
        name: 'Tennis',
        price: 750,
        categtory: 'Sports',
        status: 'Unavailable',
      },
      {
        id: 15,
        name: 'Basketball',
        price: 800,
        categtory: 'Sports',
        status: 'Available',
      },
    ],
  };

  ngOnInit() {}

  ngAfterViewInit() {}

  loadDatatable() {
    console.log('34');
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
