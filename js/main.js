(function ($) {

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  //DEFINE SCREEN SIZE AT FIRST LOAD
  if(w >= 991) {
    $(".menu").css("display", "table");
    $(".mobile-menu").css("display", "none");
  }
  else {
    $(".menu").css("display", "none")
    $(".mobile-menu").css({display: "table", height: "100%"});
  }

  //CHANGE MENU DISPLAY DEPENDING ON RESIZE WINDOW
  $(window).on('resize', function(){
      var win = $(this); //this = window
      if(win.width() >= 1004) {
        $(".menu").css("display", "table");
        $(".mobile-menu").css("display", "none");
      }
      else  {
        $(".menu").css("display", "none")
        $(".mobile-menu").css({display: "table", height: "100%"});
      }
  });

  // $('.dropdown').on('mouseover', function() {
  //   $(this).children('div.dropdown-menu').removeClass('closed').addClass('open');
  // });

  // SELECTBOX CONTENT
  var list = $(".selectbox-content");
  for(let i = 0; i < list.length; i++){
    $(list[i]).bind('click', {val: list[i].innerHTML }, function(event) {
      $("input[name*='agencyLicense']").val("Code for " + event.data.val);
      $(".selectbox-value-selected").html(event.data.val);
      $(".selectbox-placeholder").css("display", "none");
      $(".selectbox-value-selected").css("display", "inline-block");
    });
  }

  //REQUIRED FIELDS
  var reqFields = $(':input[required]');
  for(let j = 0; j < reqFields.length; j++) {
    $(reqFields[j]).on("blur", function(event) {
      if (reqFields[j].value.length <= 0) { // blank
        $(reqFields[j]).addClass('invalidData');
        $(".invalidAlert").css("display", "block");
      }
      else {
        $(reqFields[j]).removeClass('invalidData');
      }
    })
  }


}(jQuery));

function userLogin() {
  $("#formModal").css("display", "block");
  $(".user-login").css("display", "block");
  $(".dropdown").children('div.dropdown-menu').removeClass('open').addClass('closed');
}

function agentLogin() {
  $("#formModal").css("display", "block");
  $(".agent-login").css("display", "block");
  $(".dropdown").children('div.dropdown-menu').removeClass('open').addClass('closed');
}

function userRegist() {
  $("#formModal").css("display", "block");
  $(".user-regist").css("display", "block");
  $(".user-login").css("display", "none");
  $(".dropdown").children('div.dropdown-menu').removeClass('open').addClass('closed');
}

function agentRegist() {
  $("#formModal").css("display", "block");
  $(".agent-regist").css("display", "block");
  $(".agent-login").css("display", "none");
  $(".dropdown").children('div.dropdown-menu').removeClass('open').addClass('closed');
}

// FORM
function openSelectbox() {
  var hide = $(".selectbox-list").hasClass("selectbox-hide");
  if(hide) {
    $(".selectbox-list").css("display", "block");
    $(".selectbox-list").removeClass("selectbox-hide").addClass("selectbox-show");
    $("#caretSelectbox").removeClass("caret-down-selectbox").addClass("caret-up-selectbox");
  }
  else {
    $(".selectbox-list").css("display", "none");
    $(".selectbox-list").removeClass("checkbox-show").addClass("selectbox-hide");
    $("#caretSelectbox").removeClass("caret-up-selectbox").addClass("caret-down-selectbox");
  }
}

function closeForm() {
  $("#formModal").css("display", "none");
  $(".user-regist").css("display", "none");
  $(".user-login").css("display", "none");
  $(".agent-regist").css("display", "none");
  $(".agent-login").css("display", "none");
}

function validInput(th) {
  if(th.value == "") {
    $(th).addClass("invalidData");
  }
}
