chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'showPopup') {
      let data = message.data;
      console.log("Received message from background script:", data);
  
      // Create a div element for the popup
      let popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.top = '20px';
      popup.style.right = '20px';
      popup.style.padding = '15px';
      popup.style.backgroundColor = '#f9f9f9';
      popup.style.border = '1px solid #ccc';
      popup.style.borderRadius = '5px';
      popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      popup.style.zIndex = '9999';
      popup.style.fontSize = '14px';
      popup.style.color = '#333';
  
      // Set the content of the popup
      popup.innerText = data.message || "!!!DZIALA!!!";
  
      // Add a close button
      let closeBtn = document.createElement('button');
      closeBtn.innerText = '✖';
      closeBtn.style.marginLeft = '10px';
      closeBtn.style.border = 'none';
      closeBtn.style.background = 'transparent';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.fontSize = '16px';
      closeBtn.onclick = function () {
        popup.remove();
      };
      popup.appendChild(closeBtn);
  
      document.body.appendChild(popup);
    }
  });
  