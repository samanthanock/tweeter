// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//

$(function() {
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
  $('#newTweetText textarea').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: (data) => {
        $('#newTweetText textarea').val('');
        $('.counter').text('140');
        $('#new-tweet-box').prependTo(data);
        loadTweets();
      },
      error: function(err) {}
    });
  });
  $('#newTweetText textarea').on('focus', () => {
    $('.error-msg').text('');
  });
  $('#nav-bar button').on('click', () => {
    $('#newTweetText textarea').slideToggle(300, () => {
      $('#newTweetText textarea').select();
    });
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
