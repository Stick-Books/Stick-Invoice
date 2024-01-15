
function showContent(contentType) {
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('itemsContent').style.display = 'none';
    document.getElementById('quotesContent').style.display = 'none';
    document.getElementById('deliverychallanContent').style.display = 'none';
    document.getElementById('invoiceContent').style.display = 'none';
    document.getElementById(contentType + 'Content').style.display = 'block';
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');

    if (sidebar.style.width === '215px' || sidebar.style.width ==='') {
        sidebar.style.width = '60px';
        content.style.marginLeft = '60px';

        var buttons = document.querySelectorAll('.listbutton');

        buttons.forEach(function(button) {
            button.style.width = '40px';
        });

        var slidebarnames = document.querySelectorAll('.sidebariconnames');

        slidebarnames.forEach(function(sidebar) {
            sidebar.style.display = 'none';
        });

    } else {
        sidebar.style.width = '215px';
        content.style.marginLeft = '215px';

        var buttons = document.querySelectorAll('.listbutton');

        buttons.forEach(function(button) {
            button.style.width = '200px';
        });

        var slidebarnames = document.querySelectorAll('.sidebariconnames');

        slidebarnames.forEach(function(sidebar) {
            sidebar.style.display = 'block';
        });

    }
}
