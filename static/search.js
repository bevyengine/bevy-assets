function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}

function initSearch() {
    var $searchInput = document.getElementById("search");

    var options = {
        bool: "AND",
        fields: {
            title: { boost: 2 },
            description: { boost: 1 },
        },
        expand: true
    };
    var currentTerm = "";
    var index = elasticlunr.Index.load(window.searchIndex);

    $searchInput.addEventListener("keyup", debounce(function () {
        var term = $searchInput.value.trim();
        if (term === currentTerm || !index) {
            return;
        }

        if (term === "") {
            document.querySelectorAll(".card").forEach(card => {
                card.style.display = "block";
            });
            document.querySelectorAll(".card-list").forEach(list => {
                list.style.display = "flex";
            });
            document.querySelectorAll(".category").forEach(list => {
                list.style.display = "block";
            });
            return;
        }

        currentTerm = term;
        var results = index.search(term, options);
        if (results.length === 0) {
            document.querySelectorAll(".card").forEach(card => {
                card.style.display = "block";
            });
            document.querySelectorAll(".card-list").forEach(list => {
                list.style.display = "flex";
            });
            document.querySelectorAll(".category").forEach(list => {
                list.style.display = "block";
            });
            return;
        }

        if (results.length > 0) {
            document.querySelectorAll(".card").forEach(card => {
                card.style.display = "none";
            });
        }
        for (var i = 0; i < results.length; i++) {
            let element = document.getElementById(results[i].doc.title);
            if (element) {
                element.style.display = "block";
            }
        }

        document.querySelectorAll(".card-list").forEach(list => {
            var hasVisible = false
            list.querySelectorAll(".card").forEach(card => {
                if (card.style.display === "block") {
                    hasVisible = true;
                }
            })
            if (list.id && list.id.length > 5) {
                var header = document.querySelector("#" + list.id.substr(0, list.id.length - 5));
                if (hasVisible) {
                    list.style.display = "flex"
                    if (header) {
                        header.style.display = "block";
                    }
                } else {
                    list.style.display = "none";
                    if (header) {
                        header.style.display = "none";
                    }
                }
            }
        })
    }, 150));
}


if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    initSearch();
} else {
    document.addEventListener("DOMContentLoaded", initSearch);
}