import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
declare var $: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    //cartoon
    public cartoonData = [
        { name: 'Daffy Duck', email: 'looneytunes.com', webrank: 2 },
        { name: 'Micky Mouse', email: 'disney.com', webrank: 3 },
        { name: 'Porky Pig', email: 'looneytunes.com', webrank: 4 },
        { name: 'Wily Coyote', email: 'looneytunes.com', webrank: 3 },
        { name: 'Duck Dodgers', email: 'looneytunes.com', webrank: 1 },
        { name: 'Foghorn Leghorn', email: 'looneytunes.com', webrank: 3 },
        { name: 'Speedy Gonzales', email: 'looneytunes.com', webrank: 1 },
        { name: 'Bugs Bunny', email: 'looneytunes.com', webrank: 5 },
        { name: 'Woody Woodpecker', email: 'filmation.com', webrank: 2 },
        { name: 'Blue Falcon', email: 'test@gmail.com', webrank: 2 },
        { name: 'Captain Caveman', email: 'filmation.com', webrank: 4 },
        { name: 'Secret Squirrel', email: 'filmation.com', webrank: 1 },
        { name: 'Road Runner', email: 'looneytunes.com', webrank: 3 },
        { name: 'Pink Panther', email: 'unitedartists.com', webrank: 3 },
        { name: 'Elmer Fudd', email: 'looneytunes.com', webrank: 3 },
        { name: 'Marvin Martian', email: 'looneytunes.com', webrank: 2 },
    ];
    cartoonDtOptions: any = {
        // "searching": true,
        // "processing": false,
        // "paging": true,
        // "ordering": true,
        // "info": true,
        "dom": "Bftlirp",
        "pagingType": "simple",
        "pageLength": 5,
        "lengthMenu": [5, 10, 20, 50],
        "buttons": ['pdf', 'excel', 'csv', 'copy']
    };

    //comments
    commentsDtOptions = {
        // "paging": true,
        // "searching": true,
        // "ordering": true,
        // "info": true,
        // "pageLength": 5,
        // "lengthMenu": [5, 10, 20, 50],
        "dom": "Bfltlipr",
        "buttons": ['pdf', 'excel'],
        "processing": false,
        "serverSide": false,
        "ajax": {
            "url": "https://angular-datatables-demo-server.herokuapp.com/",
            "success": (res: any) => {
                $('#commentsDataTable').DataTable().clear();
                $('#commentsDataTable').DataTable().rows.add(res.data);
                $('#commentsDataTable').DataTable().draw();
            },
        },
        "columns": [
            { "data": "id" },
            { "data": "firstName" },
            { "data": "lastName" },
        ]
    }

    constructor(private http: HttpClient) { }

    ngAfterViewInit() {
        $('#cartoonDataTable').DataTable(this.cartoonDtOptions);
        $('#commentsDataTable').DataTable(this.commentsDtOptions);
    }

}
