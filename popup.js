document.addEventListener('DOMContentLoaded', function(){

  var readonlyLinkEl = document.getElementById('markdownLinkFormatted');
  var markdownBtn = document.getElementById('markdownCopyBtn');

  markdownBtn.addEventListener('click', function() {

    readonlyLinkEl.select();
    document.execCommand('copy');
  });

  chrome.tabs.getSelected(null, function(tab) {

    readonlyLinkEl.value = `[${tab.title}](${tab.url})`;
  });
});