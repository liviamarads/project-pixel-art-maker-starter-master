// Select size input
$('#sizePicker').submit(function (event) {
    // Stop the submit event
    event.preventDefault();
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();
    makeGrid(height, width);
    addColor();
})

/**
 * A grid should appear when users
 *  submit width and height
 */
function makeGrid(n, m) {
    // Clean the table before creating another one
    $('tr').remove();

    // Create the grid
    for (var i = 1; i <= n; i++) {
        $('#pixelCanvas').append('<tr id=table-row' + i + '></tr>');
        for (var j = 1; j <= m; j++) {
            $('#table-row' + i).append('<td></td>');
        }
    }
}

/**
 * This function enables the color changing when 
 * the user clicks on a grid's cell
 */
function addColor() {
    $('td').click(function() {
        $(this).attr('style', 'background-color:' + $('#colorPicker').val());
    })
}
