var config = {
    apiKey: "AIzaSyAK6h37lObm09ofjIhdcz_E4v4a3Njag1c",
    authDomain: "employeelogs-991b4.firebaseapp.com",
    databaseURL: "https://employeelogs-991b4.firebaseio.com",
    projectId: "employeelogs-991b4",
    storageBucket: "",
    messagingSenderId: "1081368554524"
};

firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var start = "";
var rate = 0;

// Capture Button Click
 $("#add-employee").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#employeeName").val().trim();
    role = $("#employeeRole").val().trim();
    start = $("#startDate").val().trim();
    rate = $("#monthlyRate").val().trim();

    // Code for handling the push
    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate,
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

// Firebase watcher + initial loader + order/limit HINT: .on("child_added"
database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.start);
    console.log(sv.rate);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.role);
    $("#age-display").text(sv.start);
    $("#comment-display").text(sv.rate);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
