// https://api.myjson.com/bins/un909
// https://slowpoke-api.now.sh/

const STATES_URL = 'https://api.myjson.com/bins/un909';

// callback
// $.get(STATES_URL, showStates);

//deffered done
// $.get(STATES_URL)
//   .done(showStates);

//promise then
$.get(STATES_URL)
  .then(showStates)
  .catch(showError);

const SLOWPOKE_URL = 'https://slowpoke-api.now.sh/say';

const postData = {
  message: 'Hello jQuery AJAX!'
};

// callback
// $.post(SLOWPOKE_URL, postData, showSlowpokeMessage);

// deffered done
// $.post(SLOWPOKE_URL, postData)
//   .done(showSlowpokeMessage);

// promise then
// $.post(SLOWPOKE_URL, postData)
//   .then(showSlowpokeMessage);

// handle error with options
// $.get({
//   url: 'wat',
//   success: function(data) {
//     console.log(data);
//   },
//   error: showError
// });

// deferred fail
// $.get('wat').done(showResult).fail(showError);

// promise catch
// $.get('wat')
//   .then(showResult)
//   .catch(showError);

function showResult(result) {
  console.log(result);
}

function showError(error) {
  console.log(error);
  $('.error').text(`${error.status}: ${error.statusText}`);
}

function showStates(states) {
  const statesHTML = states.reduce(function(statesHTML, state) {
    statesHTML += `<p>${state.name}</p>`;
    return statesHTML;
  }, '');
  $('main').append(statesHTML);
}

function showSlowpokeMessage(result) {
  $('main').append(`<p>${result.message}</p>`);
  $('main').append(`<p>${result.waited}</p>`);
}
