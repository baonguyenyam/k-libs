$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function createNewsSocial1() {
  var newsFullPath = document.URL
  var newsFullPathEncode = encodeURIComponent(document.URL)
  $('.fb-share-button').attr('data-href', newsFullPath)
  $('.fb-comments').attr('data-href', newsFullPath)
  $('.fb-share-button .fb-xfbml-parse-ignore').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + newsFullPathEncode + '&src=sdkpreparse')
  $('.twitter-share-button').attr('data-url', newsFullPath)
}

$(document).ready(function () {
  createNewsSocial1()
});

$(window).resize(function () {
})
