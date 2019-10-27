// Select size input
$('#sizePicker').submit(function (event) {
    // Stop the submit event
    event.preventDefault();
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();
    makeGrid(height, width);
    addColorEvent();
})

// When size is submitted by the user, call makeGrid()
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

function addColorEvent() {
    // Select color input
    $('td').click(function() {
        let color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
