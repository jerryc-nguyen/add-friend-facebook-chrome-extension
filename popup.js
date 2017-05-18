document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("add-friend").onclick = function() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"type": "add-friend"});
    });
  }
});
