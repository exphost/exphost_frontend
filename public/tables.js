$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#dataTable tfoot th').each( function () {
        var title = $(this).text();
        if(this.innerHTML != "Actions" && this.innerHTML != "#")
          $(this).html( '<input style="width:100%" type="text" placeholder="Search '+title+'" />' );
        else
          $(this).html("");

    } );

    // DataTable
    var table = $('#dataTable').DataTable({
        initComplete: function () {
            // Apply the search
            this.api().columns().every( function () {
                var that = this;

                $( 'input', this.footer() ).on( 'keyup change clear', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                    }
                } );
            } );
        }
    });
} );
