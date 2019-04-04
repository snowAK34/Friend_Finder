let friends = [
    {
        name: "Placeholder Name",
        image: "img url",
        answers: [1,2,3,4,5,6,7,8,9,10]
    }
];

$( document ).ready(function() {

    $.get("/api/friends", function(data) {
        console.log(data);
    });
    
    
    $("#survey-answer-btn").on("click", function(event) {
        event.preventDefault();
    
        let newFriend = {
            name: $("name").val().trim(),
            image: $("image").val().trim(),
        }
    
        $.post("/api/friends", newFriend).then(function(data) {
    
        });
    });
    
});