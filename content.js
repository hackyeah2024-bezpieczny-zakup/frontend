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
      popup.style.padding = '20px';
      popup.style.borderRadius = '10px';
      popup.style.zIndex = '9999';
      popup.style.fontSize = '18px';
      popup.style.width = '350px';
      popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      popup.style.color = '#fff';
      popup.style.fontFamily = 'Poppins, sans-serif';
      popup.style.alignItems = 'center';

      // Change styles depending on the message.data
      if (data === 1) {
          // Red popup (unsafe)
          popup.style.backgroundColor = '#D90429';
          popup.innerHTML = `
              <div style="font-size: 40px;">&#10060;</div>
              <div style="display: flex; align-items: center, justify-content: center;">
                  <div style="margin-left: 15px;">
                      <h2 style="margin: 0;text-align: center;">Niebezpieczny sklep</h2>
                      <ul style="list-style: none; padding: 0;">
                          <li>&#10060; Strona została zgłoszona przez 13 użytkowników</li>
                          <li>&#10060; Sklep nie znajduje się w REGON</li>
                          <li>&#10060; Brak certyfikatu SSL</li>
                      </ul>
                  </div>
              </div>
              <button style="margin-top: 15px; background-color: #fff; color: #D90429; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">
                  Więcej Informacji
              </button>
          `;
      } else if (data === 0) {
          // Green popup (safe)
          popup.style.backgroundColor = '#2B7A0B';
          popup.innerHTML = `
              <div style="display: flex; align-items: center;">
                  <div style="font-size: 40px;">&#9989;</div>
                  <div style="margin-left: 15px;">
                      <h2 style="margin: 0;">Bezpieczny Zakup</h2>
                      <ul style="list-style: none; padding: 0;">
                          <li>&#9989; Firma działa od 2014r.</li>
                          <li>&#9989; Sklep znajduje się w REGON</li>
                          <li>&#9989; Posiada media społecznościowe</li>
                          <li>&#9989; Aktywny certyfikat SSL</li>
                      </ul>
                  </div>
              </div>
              <button style="margin-top: 15px; background-color: #fff; color: #2B7A0B; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">
                  Więcej Informacji
              </button>
          `;
      }

      // Add a close button
      let closeBtn = document.createElement('button');
      closeBtn.innerText = '✖';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '10px';
      closeBtn.style.background = 'transparent';
      closeBtn.style.color = '#fff';
      closeBtn.style.border = 'none';
      closeBtn.style.fontSize = '16px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.onclick = function () {
          popup.remove();
      };
      popup.appendChild(closeBtn);

      document.body.appendChild(popup);
  }
});
