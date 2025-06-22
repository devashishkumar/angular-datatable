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

## To use this application, follow these steps after cloning the project

1. `npm install`
2. `ng serve`