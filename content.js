chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.type === "add-friend" ) {
      $.each($(".uiScrollableArea.fade .FriendRequestAdd"), function(index, elem) {
        setTimeout(function() {
          elem.click();
        }, 100)
      })
      alert("completed");
    }
  }
);
