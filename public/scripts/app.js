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

$(function() {
  const renderTweets = (tweetData) => {
    // need to loop through tweetData object to find tweet information
    tweetData.forEach(function(element) {
      // for each loop
      var element = createTweetElement(tweetData);
      // the element is assigned to being createTweetElement
      $(createTweetElement(element)).prependTo('#new-tweet-box');
      // each element now creatTweetElement is being prependedto the new tweet container
    });
  };
  const createTweetElement = (tweetData) => {
    return `
  <article class="tweeters">
  <header id="top-of-tweet-box">
  <a href="#"></a>
  <img class="userAvatar" src="${tweetData.user.avatars.small}"/>
  <h3 class="userName">"${tweetData.user.name}"</h3>
  <a class="user-handle" href="#">"${tweetData.user.handle}"</a>
</header>

    <p id="user-tweet-conent">"${tweetData.content.text}"</p>


  <footer class="new-tweet-footer">
    <div class="tweet-timestamp">"${tweetData.created_at}"</div>
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
});
