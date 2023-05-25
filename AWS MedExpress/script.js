$(document).ready(function() {
  // Initialize cart
  var cart = [];

  // Add to cart function
  $('.add-to-cart').click(function() {
    // Get product name, price and quantity
    var name = $(this).data('name');
    var price = $(this).data('price');
    var quantity = $(this).data('quantity');
    // Add item to cart
    cart.push({
      name: name,
      price: price,
      quantity: quantity
    });

    // Update cart badge
    $('.cart-badge').text(cart.length);

    // Show success message with product name and quantity
    alert(quantity + 'x ' + name + ' added to cart!');
  });

  // Authenticate login
  $('#login-form').on('submit', function(e) {
    e.preventDefault();

    var password = $('#password-input').val();

    // Check if password is empty
    if (password.trim() === '') {
      // Password is empty, show error message
      $('#login-error-message').text('Please enter a password.').show();
      return;
    }

    // Check if password is correct
    if (password === 'your-predefined-password') {
      // Password is correct, show success message and hide login modal
      alert('Login successful!');
      $('#login-modal').modal('hide');
    } else {
      // Password is incorrect, show error message
      $('#login-error-message').text('Incorrect password, please try again.').show();
    }
  });

  // Show login popup
  $('#login-link').click(function() {
    $('#login-error-message').hide();
    $('#login-modal').modal('show');
  });

  // Show signup popup
  $('#signup-link').click(function() {
    // Check if any input fields are empty
    var username = $('#signup-username').val();
    var password = $('#signup-password').val();
    
    if (!username.trim() || !password.trim()) {
      // Input fields are empty, show error message
      $('#signup-error-message').text('Please fill in all fields.').show();
      return;
    } else if (username.indexOf('@') === -1) {
      // Username does not contain '@', show error message
      $('#signup-error-message').text('Invalid email address.').show();
      return;
    }

    // Input fields are not empty, hide error message and show signup modal
    $('#signup-error-message').hide();
    $('#signup-modal').modal('show');
  });
});


// $(document).ready(function() {
//   // Initialize cart
//   var cart = [];

//   // Add to cart function
//   $('.add-to-cart').click(function() {
//     // Get product name and price
//     var name = $(this).data('name');
//     var price = $(this).data('price');

//     // Add item to cart
//     cart.push({
//       name: name,
//       price: price
//     });

//     // Update cart badge
//     $('.cart-badge').text(cart.length);

//     // Show success message
//     alert('Item added to cart!');
//   });

//   // Show login/signup popup
//   $('#login-link').click(function() {
//     $('#login-modal').modal('show');
//   });

//   $('#signup-link').click(function() {
//     $('#signup-modal').modal('show');
//   });

//   // Hide login/signup popup on click outside
//   $(document).on('click', function(event) {
//     if ($(event.target).is('#login-modal') || $(event.target).is('#signup-modal')) {
//       return;
//     }
//     $('.modal').modal('hide');
//   });
// });

// ---------

// $(document).ready(function() {
//   // Initialize cart
//   var cart = [];

//   // Add to cart function
//   $('.add-to-cart').click(function() {
//     // Get product name and price
//     var name = $(this).data('name');
//     var price = $(this).data('price');

//     // Add item to cart
//     cart.push({
//       name: name,
//       price: price
//     });

//     // Update cart badge
//     $('.cart-badge').text(cart.length);

//     // Show success message
//     alert('Item added to cart!');
//   });

//   // Show login/signup popup
//   $('#login-link').click(function() {
//     $('#login-modal').modal('show');
//   });

//   $('#signup-link').click(function() {
//     $('#signup-modal').modal('show');
//   });

//   // Handle sign up button click event
//   $('#signnn').click(function() {
//     var email = $('#signup-email').val();
//     var password = $('#signup-password').val();
    
//     // Validate email and password fields
//     if (email === "" || password === "") {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Validate email format
//     if (!isValidEmail(email)) {
//       alert("Invalid email address");
//       return;
//     }

//     // Check if email already exists
//     if (emailExists(email)) {
//       alert("Email address already exists");
//       return;
//     }

//     // Register new user
//     registerUser(email, password);

//     // Show success message
//     alert("Registration successful!");
//   });

//   // Handle login button click event
//   $('#login-btn').click(function() {
//     var email = $('#login-email').val();
//     var password = $('#login-password').val();

//     // Validate email and password fields
//     if (email === "" || password === "") {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Authenticate user
//     if (authenticateUser(email, password)) {
//       // Show success message
//       alert("Login successful!");
//     } else {
//       // Show error message
//       alert("Incorrect email or password");
//     }
//   });

//   // Helper function to validate email format
//   function isValidEmail(email) {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   // Helper function to check if email already exists
//   function emailExists(email) {
//     // This is a dummy implementation for demonstration purposes only
//     var registeredEmails = ["test@test.com", "user@example.com", "foo@bar.com"];
//     return registeredEmails.includes(email);
//   }

//   // Helper function to register a new user
//   function registerUser(email, password) {
//     // This is a dummy implementation for demonstration purposes only
//     console.log("Registered new user:", email);
//   }

//   // Helper function to authenticate a user
//   function authenticateUser(email, password) {
//     // This is a dummy implementation for demonstration purposes only
//     var registeredUsers = [
//       { email: "test@test.com", password: "test123" },
//       { email: "user@example.com", password: "password" },
//       { email: "foo@bar.com", password: "foobar


// -------------


