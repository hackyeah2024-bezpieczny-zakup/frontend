chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    (async ()=>{
        if (changeInfo.status === 'complete' && tab.active) {
            const {url} = tab;

            try {
                hostname = new URL(url).hostname;
                console.log("Navigated to domain:", hostname);
              } catch (error) {
                console.error("Invalid URL:", url);
                return;
              }

              try {
                const res = await fetch('http://localhost:3000/urls/check', { // Replace with your server URL
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ url: hostname })
                  })
      
                  const data = await res.json();
                  console.log("Received response from server:", data);
                //   chrome.action.setIcon({ path: iconPath, tabId: tabId });
              
                      // Send message to content script to show popup
                  chrome.tabs.sendMessage(tabId, { action: 'showPopup', data: data.result })
      
              } catch (error) {
                console.error("Error sending URL to server:", error);
              }
          }
    })()
});
  