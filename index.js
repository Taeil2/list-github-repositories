function getRepositories(user) {
  let url =
  fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
    })
    .catch(error => console.log('Something went wrong.'));
}

function displayResults(json) {
  let resultsHtml = '';
  for (let i = 0; i < json.length; i++) {
    resultsHtml += `
      <div>
        <h4>${json[i].name}</h4>
        <div><a href="${json[i].url}">Github link</a></div>
      </div>
    `;
  }
  $('#results').html(resultsHtml);
}

function handleSubmit() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    let user = $('#github-user').val();
    getRepositories(user);
  });
}

$( document ).ready(function() {
  handleSubmit();
});
