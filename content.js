chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'showPopup') {
      let data = message.data;
      console.log("Received message from background script:", data);

      // Create a div element for the popup
      let popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.top = '20px';
      popup.style.right = '20px';
      popup.style.display = 'flex';
      popup.style.flexDirection = 'column';
      popup.style.padding = '16px 19px';
      popup.style.borderRadius = '10px';
      popup.style.zIndex = '9999';
      popup.style.fontSize = '18px';
    //   popup.style.width = '350px';
      popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      popup.style.color = '#fff';
      popup.style.fontFamily = 'Poppins, sans-serif';
      popup.style.alignItems = 'center';
      popup.style.backgroundColor = "white";
      popup.style.color = "black";

      // Change styles depending on the message.data
      if (data === 1) {
          // Red popup (unsafe)
          popup.innerHTML = `
              <div style="font-size: 40px;padding: 8px 0 0 0;">&#10060;</div>
              <div style="display: flex; align-items: center, justify-content: center;">
                  <div style="">
                      <h2 style="margin: 0;text-align: center;font-weight: 1000;font-size: 24px;padding: 6px 12px 12px 12px;">Niebezpieczny sklep</h2>
                      <ul style="list-style: none; marging: 0; padding: 0;font-size: 13px;">
                          <li style="padding: 1px 0">&#10060; Strona została zgłoszona przez 13 użytkowników</li>
                          <li style="padding: 1px 0">&#10060; Sklep nie znajduje się w REGON</li>
                          <li style="padding: 1px 0">&#10060; Brak certyfikatu SSL</li>
                      </ul>
                  </div>
              </div>
              <button style="margin-top: 15px;background-color: #fff;/* color: #D90429; */border: none;padding: 6px 26px;border-radius: 16px;cursor: pointer;box-shadow: 0px 2px 4px #BEBEBE;font-size: 10pt;border: 1px solid #BEBEBE;">
                  Więcej Informacji
              </button>
          `;
      } else if (data === 0) {
          // Green popup (safe)
          popup.innerHTML = `
              <div style="font-size: 40px;padding: 8px 0 0 0;">&#9989;</div>
              <div style="display: flex; align-items: center, justify-content: center;">
                  <div style="">
                      <h2 style="margin: 0;text-align: center;font-weight: 1000;font-size: 24px;padding: 6px 12px 12px 12px;">Bezpieczny sklep</h2>
                      <ul style="list-style: none; margin: 0; padding: 0;font-size: 13px;">
                          <li style="padding: 1px 0">&#9989; Firma działa od 2014r.</li>
                          <li style="padding: 1px 0">&#9989; Sklep znajduje się w REGON</li>
                          <li style="padding: 1px 0">&#9989; Posiada media społecznościowe</li>
                          <li style="padding: 1px 0">&#9989; Aktywny certyfikat SSL</li>
                      </ul>
                  </div>
              </div>
              <button style="color: black; margin-top: 15px;background-color: #fff;padding: 6px 26px;border-radius: 16px;cursor: pointer;box-shadow: 0px 2px 4px #BEBEBE;font-size: 10pt;border: 1px solid #BEBEBE;">
                  Więcej Informacji
              </button>
          `;
      }

      // Add a close button
      let closeBtn = document.createElement('button');
      closeBtn.innerText = '✖';
      closeBtn.style.color = "#000";
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '14px';
      closeBtn.style.background = 'transparent';
      closeBtn.style.border = 'none';
      closeBtn.style.fontSize = '16px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.onclick = function () {
          popup.remove();
      };

      let otherBtn = document.createElement('button');
      otherBtn.innerText = data? "Zapytaj Bliskiego->" : "Poleć sklep -> ";
      otherBtn.style.color = "#000";
      otherBtn.style.position = 'absolute';
      otherBtn.style.top = '14px';
      otherBtn.style.left = '13px';
      otherBtn.style.background = 'transparent';
      otherBtn.style.border = 'none';
      otherBtn.style.fontSize = '10px';
      otherBtn.style.cursor = 'pointer';
      otherBtn.style.textDecoration = 'underline';
      otherBtn.style.padding = '1px 6px';
      otherBtn.onclick = function () {
        window.open(data? "https://www.whatsapp.com/" : "about:blank", '_blank');
      };

      popup.appendChild(closeBtn);
      popup.appendChild(otherBtn);

      document.body.appendChild(popup);
  }
});
