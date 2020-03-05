  <script type="text/javascript">
    // Question: What does this code do?
    $("#add-btn").on("click", function(event) {
      event.preventDefault();

      var newReservation = {
        customerName: $("#name").val().trim(),
        customerEmail: $("#role").val().trim(),
        phoneNumber: $("#age").val().trim(),
        customerID: $("#force-points").val().trim()
      };
     

      // Question: What does this code do??
      $.post("/api/characters", newCharacter)
        .then(function(data) {
          console.log("add.html", data);
          alert("Adding character...");
        });
    });
  </script>
