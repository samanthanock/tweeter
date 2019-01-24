// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

const tweetData = {
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
    text: 'If I have seen further it is by standing on the shoulders of giants'
  },
  created_at: 1461116232227
};
$(function() {
  function createTweetElement(tweetData) {
    const name = tweetData.user.name;
    const img = tweetData.user.avatars.small;
    const time = tweetData.user.created_at;
    const content = tweetData.user.content;

    const $header = $('<header>').addClass('topOfContainer');
    const $img = $('<img>')
      .addClass('userAvatar')
      .attr('src', img);
    const $h3 = $('<h3>').text(name);
    let $article = $('<article>')
      .addClass('tweetContent')
      .text(content);
    const $footer = $('<footer>')
      .addClass('NWTFooter')
      .text(time);

    $article.append($header);
    $header.append($img);
    $header.append($h3);
    $article.append($article);
    $article.append($footer);
    $article.appendTo($('.newContainer'));
    return $article;
  }
  var $articleElement = createTweetElement(tweetData);
  $articleElement.appendTo($('.newContainer'));
});
