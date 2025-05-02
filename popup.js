function executeScript(rating) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (rating) => {
          const comments = {
            1: ["Not really good", "I don't like the teaching style", "Very poor experience"],
            2: ["Could be better", "Not satisfied", "Needs improvement"],
            3: ["Average", "Okay but not great", "Moderate experience"],
            4: ["Good job", "Satisfied", "Pretty good overall"],
            5: ["Awesome", "Excellent work", "Fantastic experience"]
          };
  
          const commentList = comments[rating];
          const randomComment = commentList[Math.floor(Math.random() * commentList.length)];
  
          var radios = document.querySelectorAll('input[type="radio"][value="' + rating + '"]');
          [].forEach.call(radios, function(rdo) {
            rdo.checked = true;
          });
  
          var commentBox = document.getElementById("Comment");
          if (commentBox) {
            commentBox.value = randomComment;
          }
  
          var form = document.forms[0];
          if (form) {
            form.submit();
          }
        },
        args: [rating]
      });
    });
  }
  
  document.getElementById("rate1").addEventListener("click", function() {
    executeScript(1);
  });
  document.getElementById("rate2").addEventListener("click", function() {
    executeScript(2);
  });
  document.getElementById("rate3").addEventListener("click", function() {
    executeScript(3);
  });
  document.getElementById("rate4").addEventListener("click", function() {
    executeScript(4);
  });
  document.getElementById("rate5").addEventListener("click", function() {
    executeScript(5);
  });
  