import $ from 'jquery'

$("#searchBar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log(value);
    // $("div.tenantContent div.row div.col-sm-3").filter(function() {
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    // });
});