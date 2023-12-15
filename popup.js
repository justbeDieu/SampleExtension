chrome.storage.local.get("selectedText", function(result) {
    const selectedText = result.selectedText;
    document.getElementById('selectedText').textContent = selectedText;
  });