# For new Project following points need to be follow

# Create angular project using command

`ng new projectname --no-standalone`

# Execute command in angular project CLI

`ng add angular-datatables`

## Add CSS/JS files entries in angular.json

```sh
"styles": [
    "src/styles.css",
    "node_modules/datatables.net-dt/css/dataTables.dataTables.min.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/datatables.net/js/dataTables.min.js"
]
```

## Import DataTablesModule module in app.module

```sh
imports: [
    DataTablesModule
  ]
```

## To implement action buttons like (copy, print, csv, excel, pdf), execute these commands

```sh

npm install jszip --save
npm install datatables.net-buttons --save
npm install datatables.net-buttons-dt --save

```

## Update scripts property under build options in angular.json

```sh

"scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/datatables.net/js/dataTables.min.js",
              "node_modules/jszip/dist/jszip.js",
              "node_modules/datatables.net-buttons/js/dataTables.buttons.js",
              "node_modules/datatables.net-buttons/js/buttons.colVis.js",
              "node_modules/datatables.net-buttons/js/buttons.html5.js",
              "node_modules/datatables.net-buttons/js/buttons.print.js"
            ],

```
## Add dom and button properties in component class dtOptions property like:

```sh
dtOptions: any = {
    pagingType: 'full_numbers',
    paging: true,
    lengthMenu: [5, 10, 15, 20, 25],
    pageLength: 10,
    ordering: true,
    order: [[0, 'asc']],
    language: {
      search: 'Search',
    },
    responsive: true,
    dom: 'Bfrtip',
    buttons: ['copy', 'print', 'csv', 'excel', 'pdf'],
  };
```
![Image](https://github.com/user-attachments/assets/ca1a0e5b-cde5-4d55-83b1-12eac5030452)

## To use this application, follow these steps after cloning the project

1. `npm install`
2. `ng serve`