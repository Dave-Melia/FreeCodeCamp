var quote = "",
  author = "",
  apiKey = "ltwGwjom0Omsh18iDutOoNr3WNcHp1iEs4jjsnhXll1yxMP1Co",
  apiURL = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous";

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": apiKey
    },
    url: apiURL,

    success: function(json) {
      var res = JSON.parse(json);
      quote = res.quote;
      author = res.author;
      $(".quote").html(quote);
      $(".author").html(author);
    }
  });
}

$(function() {
  getQuote();
  $(".btn-newQuote").on('click', getQuote);
  $(".btn-share").on('click', function() {
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
});
