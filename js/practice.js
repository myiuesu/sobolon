// drawer
$(document).ready(function () {
  $(".drawer").drawer();
});

// ページ内リンクとスムーススクロール
$('a[href^="#"]').on("click", function () {
  let header = $(".header").innerHeight();
  let speed = 300;
  let id = $(this).attr("href");
  let position = 0;
  if (id != "#") {
    position = $(id).offset().top;
  }
  console.log(position);

  $("html,body").animate(
    {
      scrollTop: position - header,
    },
    speed
  );
});

// wow
new WOW().init();

// googleform
let $form = $("#js-form");

$form.submit(function (e) {
  $.ajax({
    url: $form.attr("action"),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理
        $form.slideUp();
        $("#js-success").slideDown();
      },
      200: function () {
        //送信に失敗したときの処理
        $form.slideUp();
        $("#js-error").slideDown();
      },
    },
  });
  return false;
});

// formの入力確認
let $submit = $("#js-submit");

$("#js-form input, #js-form textarea").on("change", function () {
  if (
    $("#js-form input[type='text']").val() !== "" &&
    $("#js-form input[type='email']").val() !== "" &&
    $("#js-form input[name='entry.1734208920']").prop("checked") === true
  ) {
    // 全て入力された時
    $submit.prop("disabled", false);
    $submit.addClass("-active");
  } else {
    // 入力されていない時
    $submit.prop("disabled", true);
    $submit.removeClass("-active");
  }
});
