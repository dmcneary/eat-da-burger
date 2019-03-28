$(document).ready(function () {
    $("#add-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#new-burger").val().trim(),
            eaten: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(reloader());
    });

    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var eatState = {
            eaten: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatState
        }).then(reloader());
    });

    $(".trash-btn").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(reloader());
    });

    function reloader () {
        console.log("User input detected");
        location.reload();
    }
});