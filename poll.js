// JavaScript for Poll Functionality

document.addEventListener('DOMContentLoaded', function() {
    var pollForm = document.getElementById('poll-form');
    var pollResults = document.getElementById('poll-results');
  
    // Replace with actual admin check
    var isAdmin = true; // Simulating admin status
  
    if (!isAdmin) {
      document.getElementById('poll-section').style.display = 'none';
      return;
    }
  
    pollForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      var selectedOption = document.querySelector('input[name="poll"]:checked');
      if (selectedOption) {
        var selectedValue = selectedOption.value;
        savePollResult(selectedValue);
      } else {
        alert('Please select an option.');
      }
    });
  
    function savePollResult(value) {
      // Simulate saving poll result (e.g., to a database or local storage)
      var results = JSON.parse(localStorage.getItem('pollResults')) || {};
      
      if (!results[value]) {
        results[value] = 1;
      } else {
        results[value]++;
      }
      
      localStorage.setItem('pollResults', JSON.stringify(results));
      displayPollResults();
    }
  
    function displayPollResults() {
      var results = JSON.parse(localStorage.getItem('pollResults')) || {};
      
      var resultsHtml = '<h3>Poll Results:</h3>';
      for (var option in results) {
        resultsHtml += '<p>' + option + ': ' + results[option] + ' votes</p>';
      }
      
      pollResults.innerHTML = resultsHtml;
    }
  
    // Initial display of poll results
    displayPollResults();
  });
  