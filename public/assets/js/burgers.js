$(function() {

    $(".devour-butt").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/"+id, {
            type:"PUT"
        }).then(
            function() {
                console.log("changed id: "+id+" to devoured.");

                location.reload();
            }
        ).catch(err => {if (err) throw err});
    })

    $(".burg-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg-name").val.trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created "+newBurger.burger_name);
                location.reload();
            }
        ).catch(err => {if (err) throw err});
    })
});