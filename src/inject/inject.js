chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("Hello. This message was sent from scripts/inject.js");

      var inputs = document.querySelectorAll('.fbDockChatTabFlyout textarea');

      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var attr = input.attributes.getNamedItem('onkeydown')
        var prevOnKeyDown = attr.value;

        input.attributes.setNamedItem(attr, '');
        input.onkeydown = function(e) {
          e.stopPropagation();
          console.log('test');
        };
      }
    }
  }, 10);
});
