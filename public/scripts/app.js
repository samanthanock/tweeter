// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//

const tweetData = [
  {
    user: {
      name: 'Newton',
      avatars: {
        small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
      },
      handle: '@SirIsaac'
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants'
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: 'Descartes',
      avatars: {
        small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png'
      },
      handle: '@rd'
    },
    content: {
      text: 'Je pense , donc je suis'
    },
    created_at: 1461113959088
  },
  {
    user: {
      name: 'Johann von Goethe',
      avatars: {
        small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png'
      },
      handle: '@johann49'
    },
    content: {
      text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit.'
    },
    created_at: 1461113796368
  }
];
const allTweets = $('new-tweet-container');
$(function() {
  const renderTweets = (tweets) => {
    // need to loop through tweetData object to find tweet information
    $.ajax({
      method: 'GET',
      url: '/tweets'
    }).done(function(tweets) {
      allTweets.empty();

      tweets.forEach(function(tweetObj) {
        // for each loop
        $(createTweetElement(tweetObj)).prependTo('#new-tweet-box');
        // each element now creatTweetElement is being prependedto the new tweet container
      });
    });
  };
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
  renderTweets(tweetData);

  $('#button').on('submit', function(event) {
    // prevent the default behavor
    event.preventDefault();
    // get the data from the form
    // const content = $(this).find('input').val();
    // ajax post request
    const serialized = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: serialized
    }).done(function() {
      // on success, refresh the creaks on the page
      renderTweets();
    });
  });
});
