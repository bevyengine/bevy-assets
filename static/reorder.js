var learning = document.querySelector('#learning');
var cards = learning.querySelectorAll('.card');
var cards = Array.prototype.slice.call(cards);
cards.sort((a, b) => {
    // make sure Official Bevy Examples is first
    if (a.id === "Official Bevy Examples") {
        return -1;
    }
    if (b.id === "Official Bevy Examples") {
        return 1;
    }
    return a.id.localeCompare(b.id);
});
learning.innerHTML = "";
for (i in cards) {
    learning.append(cards[i]);
}

var plugins = document.querySelectorAll('#plugins-list');
plugins.forEach(category => {
    var cards = category.querySelectorAll('.card');
    var cards = Array.prototype.slice.call(cards);
    cards.sort((a, b) => {
        return a.id.localeCompare(b.id);
    });
    category.innerHTML = "";
    for (i in cards) {
        category.append(cards[i]);
    }
});

var games = document.querySelector('#games');
var cards = games.querySelectorAll('.card');
var cards = Array.prototype.slice.call(cards);
cards.sort((a, b) => {
    return a.id.localeCompare(b.id);
});
games.innerHTML = "";
for (i in cards) {
    games.append(cards[i]);
}
