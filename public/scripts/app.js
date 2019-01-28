// import { doesNotReject } from 'assert';

// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//

$(function() {
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const renderTweets = (tweets) => {
    // need to loop through tweetData object to find tweet information
    tweets.forEach(function(tweetObj) {
      // for each loop -- for eat element in tweetData
      $(createTweetElement(tweetObj)).prependTo('#new-tweet-box');
      // each element now creatTweetElement is being prependedto the new tweet container
    });
  };
  // this is my html string template that the new tweets will follow when being inputted into the tweeter page
  const createTweetElement = (tweet) => {
    return `
    <article class="tweeters">
    <header id="top-of-tweet-box">
    <a href="#"></a>
    <img class="userAvatar" src="${tweet.user.avatars.small}"/>
    <h3 class="userName">"${tweet.user.name}"</h3>
    <a class="user-handle" href="#">"${tweet.user.handle}"</a>
    </header>

    <p id="user-tweet-conent">"${tweet.content.text}"</p>


    <footer class="new-tweet-footer">
    <div class="tweet-timestamp">"${tweet.created_at}"</div>
    <div class="tweet-icons">
    <a href="#">
    <i class="fa fa flag" aria hidden="true"></i>
    </a>
    <a href="#">
    <i class="fa fa retweet" aria hidden="true"></i>
    </a>
    <a href="#">
    <i class="fa fa heart" aria hidden="true"></i>
    </a>
    </div>
    </footer>
    `;
  };
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    // check with mentor about escape and cross site scripting
    const tweetText = escape($('textarea#newTweetText').val());
    if (tweetText.length === 0) {
      return $('.error-msg').text('hey maybe type something!!');
    }
    if (tweetText.length > 140) {
      return $('.error-msg').text('hey maybe type less!!');
    }
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: () => {
        $('textarea#newTweetText').val('');
        $('.counter').text('140');
        loadTweets();
      }
    });
  });
  $('#nav-bar button').on('click', () => {
    $('.new-tweet').slideToggle(150, () => {
      $('textarea#newTweetText').select();
    });
  });
  $('textarea#newTweetText').on('focus', () => {
    $('.error-msg').text('');
  });
  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: (data) => {
        renderTweets(data);
      }
    });
  };
  loadTweets();
});
