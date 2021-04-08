// these helpers should be totally optional. if someone disables this javascript in their browser,
// core functionality should not be affected.

function navigateBookNext(e) {
    if (e.keyCode == 37) {
        var previous = document.getElementById("book-pager-bar-previous");
        if (previous) {
            previous.click();
        }

    } else if (e.keyCode == 39) {
        var next = document.getElementById("book-pager-bar-next");
        if (next) {
            next.click();
        }
    }
}

window.onload = function () {
    window.onkeydown = navigateBookNext;
}