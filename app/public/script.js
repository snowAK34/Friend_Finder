$(document).ready(function() {

    let newFriend;

    $("#json-link").on("click", function() {
        $.get("/api/friends", function(data) {
            console.log(data);
        });
    });

    populateDropdown();

    function populateDropdown() {
        let answerMenu = $('<select class="dropmenu" required><option></option><option value= 5>5  Strongly Agree</option><option value= 4>4</option><option value= 3>3</option><option value= 2>2</option><option value= 1>1  Strongly Disagree</option></select>');

        let divArr = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10"];

        for (let i = 0; i < divArr.length; i++) {
            $(divArr[i]).append(answerMenu.clone().attr("class", "numPick"));
        }
    }

    function validateForm() {
        let isValid = true;
        $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        $(".numPick").each(function() {
            if($(this).val() === "") {
                isValid = false;
            }
        })
        return isValid;
    }

    $("#survey-answer-btn").on("click", function(event) {
        event.preventDefault();

        if (validateForm()) {
    
        let objArr = $(".numPick");
        let answers = [];
        for (let i = 0; i < objArr.length; i++) {
            answers.push(objArr[i].value);
        }

        newFriend = {
            name: $("#name").val().trim(),
            image: $("#image").val().trim(),
            answers: answers
        }

        console.log(newFriend);
    
        $.post("/api/friends", newFriend).then(function(data) {
            console.log(data);
            console.log(data.name);
            console.log(data.image);

            $("#match").modal("toggle");
            $(".modal-body").empty();
            $(".modal-body").append("<p>" + data.name + "</p><br><img id='result-img' src=" + data.image + ">");
        });

     } else {
         alert("Must fill out all fields before submitting.");
     }

    });
});
