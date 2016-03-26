(function () {
  if (document.getElementById("Home") !=null) {
  console.log("Home");
  var myName;
  myName = document.getElementById("myName");
  myName.innerHTML = "Hi! I am Frank."

  var aboutMe;
  aboutMe = document.getElementById("aboutMe");
  aboutMe.innerHTML = "My name is Frank Amaral and I am a web designer from Canada, Ontario. I am currently studying my first year of Interactive Web Development Web Design at Georgian College in Barrie, ON. Soon to freelance as a side job during my studies."
}

else if (document.getElementById("Contact") !=null) {
  console.log("Contact");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var comment = document.getElementById("comment");
  var button = document.getElementById("button");

  button.addEventListener("click", function(event){
  event.preventDefault();
  console.log("Name:" + name.value);
  console.log("Email: " + email.value);
  console.log("Comment: " + comment.value);
});
}
})();
