<<<<<<< HEAD
# Shatterblock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve -c=development` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Run `ng serve -c=prod` OR ` ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Angular Material installation process


At first you install angular material [Angular Material] (https://material.angular.io/guide/getting-started/).


 ** Angular Devkit 6+
Using the Angular CLI ng add command will update your Angular project with the correct dependencies, perform configuration changes and execute initialization code.

Run `ng add @angular/material`.


## lib-listing npm installation process


IF you use Linux or Mac open the terminal and Run `sudo npm install angular7-listing@latest` AND If you use Windows open the cmd and Run `npm install angular7-listing@latest` .

## How to implement lib-listing




<------------------------------------------ts page start -------------------------------------------->




     // use for Download the PDF 

    custom_link: any = [{
        label: 'shatterblok',
        url: 'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',
        action: 'null'
    }, {
        label: 'Audiodateline',
        url: 'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',
        action: 'null'
    }];



    // use for grab the link
    grab_link: any = [
        {
            col_name: 'grab_url',
            field_name: 'name'
        },
        {
        label: 'shatterblok grab url',
        url: 'artixtxp.com/',
        action: 'null'
    }, {
        label: 'Audiodateline grab url',
        url: 'audiodateline.com/',
        action: 'null'
    }];



   ` // Insert the Add data `
    ` pendingmodelapplicationarray: any = []; `
   
 

     // use for status search

    statusarray: any = [{val: 1, name: 'Approve'}, {val: 4, name: 'Decline'}, {val: 3, name: 'Lock'}]; 

     // use for ststic email search
    //  Example like this
    emailarray: any = [{val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com'}, {val: 'octtest@yopmail.com', name: 'octtest@yopmail.com'}, {val: 'septest@yopmail.com', name: 'septest@yopmail.com'}];

    // use for edit any field Navigate that page And you should be import the app-routing.module.ts   ex:- {path: 'editroute/:id', component: < "Write the class name"> },

    //  Example like this
    editroute: any = 'editroute';


    // use for Table Header modification 

    // Like Table head name is " firstname" => "First Name"
    modify_header_array: any = {
        'firstname': "First Name",
        'email': 'Email Id',
        'lastname': 'Last Name',
        'name': "Full Name"
    };


    // use for Table Header Skip 
    pendingmodelapplicationarray_skip: any = ['_id', 'type', 'password'];



      // use for Table Detail Field Skip 
    pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name'];


     // use for Table Detail inside the modal image path 
    pendingmodelapplicationarray_detail_datatype: any = [{
        key: "images",
        value: 'image',
        fileurl: "http://18.222.26.198/upload/brandimages/"             // Image path 
    }];

    // updateendpoint is use for data update endpoint
    updateendpoint = 'addorupdatedata';

    // deleteendpoint is use for data delete endpoint
    deleteendpoint = 'deletesingledata';

    // this is a database collection name
    tablename = 'users';

    // searchendpoint is use for  search endpoint
    searchendpoint = 'datalist';

    // use for click to another page routing path
    click_to_add_ananother_page = '/adminlist';



    // date_search_endpoint is use for All search endpoint
    date_search_endpoint: any='datalist';


    // this is a database All search collection or view name
    date_search_source: any='userslist_view';

    // this is use for  All type of search 
    search_settings:any={

        datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

        selectsearch:[{label:'Search By email',field:'email',values:this.emailarray}, {label:'Search By Status',field:'status',values:this.statusarray}], // this is use for  select search

        textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

        search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
    };



<------------------------------------------ts page end -------------------------------------------->






 `// Insert all data` 

`This is the array => status_gretterthan_zero = result `
 


`<lib-listing *ngIf="status_gretterthan_zero!=null && status_gretterthan_zero.length>0"      // chacking the condition`

             [datasource]="status_gretterthan_zero"                                         // Insert all data into datasource
             [skip]="status_gretterthan_zero_skip"                                          // Skip The Table Header 
             [modify_header_array]="status_gretterthan_zero_modify_header"                  // Modify The Table Header
             [jwttoken]="_apiService.jwttoken"                                              // Insert The JWT Token
             [sourcedata]="tablename"                                                       // Insert The database collection OR view name
             [updateendpoint]="updateurl"                                                   // Insert The Update Data Endpoint
             [statusarr]="statusarray"                                                      // Insert The Status Array
             [custombutton]="custombutton"                                                  // This is use for Custombutton Add 
             [apiurl]="_apiService.domain"                                                  // This is the Main Server Url
             [deleteendpoint]="delurl"                                                      // Insert The Delete Data Endpoint
             [detail_datatype]="status_gretterthan_zero_detail_datatype"                    // Use for Table Detail inside the modal image path and etc
             [detail_skip_array]="status_gretterthan_zero_detail_skip"                      // Use for Table Detail Field Skip

             [editroute]="editroute1"                                                       // use for edit any field Navigate that page And you should be import                                                                                // the app-routing.module.ts   ex:- {path: 'editroute/:id',                                                                                          // component: < "Write the class name"> },
             [url]="custom_link"                                                            // Use for Download the PDF 
             [date_search_source]="date_search_source"                                      // This is a database collection or view name
             [date_search_endpoint]="date_search_endpoint"                                  // Thi is use for All search endpoint
             [search_settings]="search_settings"                                            // Insert All Type Of Search Array
             [click_to_add_ananother_page]="click_to_add_ananother_page"                    // Use for click to another page routing path
             [emailarray]="emailarray"                                                      // Use for ststic email search
             [grab_link]="grab_link"                                                        // Use for grab the link
             [pdf_link]="_apiService.Pdf_link">                                             // Download PDF link


`</lib-listing>`


=======
# dna-backend-wvgebz

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/dna-backend-wvgebz)
>>>>>>> 853c0456ade1bcdf89928048429b34fb41ad3786
