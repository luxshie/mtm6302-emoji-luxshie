document.addEventListener("DOMContentLoaded", function () {
    const emojiGallery = document.getElementById("emoji-gallery");
    if (emojiGallery.childElementCount === 0) {
      const emojis = [
        128512, 128515, 128522, 128525, 128526, 128540, 128536, 128555, 128578, 128580, 128586, 128588
      ];
  
      emojis.forEach(emojiCode => {
        const emojiItem = document.createElement("div");
        emojiItem.classList.add("emoji-item");
  
        const emojiSpan = document.createElement("span");
        emojiSpan.innerHTML = `&#${emojiCode};`;
  
        const emojiCodeElement = document.createElement("code");
        emojiCodeElement.textContent = emojiCode;
  
        emojiItem.appendChild(emojiSpan);
        emojiItem.appendChild(emojiCodeElement);
  
        emojiGallery.appendChild(emojiItem);
      });
    }
  });
  
  


