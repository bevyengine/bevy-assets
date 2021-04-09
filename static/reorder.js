var learning = document.querySelector('#learning');
var cards = learning.querySelectorAll('.card');
var cards = Array.prototype.slice.call(cards);
let official = cards.filter(card => card.id === "Official Bevy Examples");
cards = cards.filter(card => card.id != "Official Bevy Examples")
cards.sort((a, b) => {
    return a.id.localeCompare(b.id);
});
learning.innerHTML = "";
learning.append(official[0]);
for (i in cards) {
    learning.append(cards[i]);
}

var plugins = document.querySelectorAll('.plugins-list');
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
