$(function() {
  var apiURL = 'https://wind-bow.glitch.me/twitch-api',
    channels = ['RetroSpock', 'KryticZeuz', 'ESL_SC2', 'milleniumtvhots', 'c9509517'];

  function getChannels() {
    $(".twitchData").empty();
    channels.forEach(function(channel) {

      function makeURL(type, user) {
        return apiURL + "/" + type + "/" + user + "?callback=?";
      } //end makeURL();

      $.getJSON(makeURL("streams", channel), function(json) {
        var view = 'all',
          user,
          game,
          logo,
          desc,
          status;

        if (json.stream === null) {
          game = 'offline';
          logo = 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=404';
          user = channel;
          desc = 'offline';
          status = 'danger';
        } else {
          game = json.stream.game;
          logo = json.stream.channel.logo;
          user = json.stream.channel.display_name;
          desc = json.stream.channel.status;
          status = 'success';
        }

        $.getJSON(makeURL("streams", channel), function(json) {
          var tableHTML = "<tr> \
                            <th scope='row' class='" + status + "'> \
                              <img src='" + logo + "'> \
                            </th> \
                            <td class='" + status + "'>" + user + "</td> \
                            <td class='" + status + "'>" + desc + "</td> \
                            <td class='" + status + "'>" + game + " </td> \
                          </tr>";


          if (json.stream === null) {
            $(".twitchData").append(tableHTML);
          } else {
            $(".twitchData").prepend(tableHTML);
          }

        }); //end inner getJSON

      }); //end getJSON;


    }); //end forEach();
    $("#addChannel").submit(function(e) {
      e.preventDefault();
      var channelName = e.target.channelName.value;

      for (var i = 0; i < channels.length; i++) {
        if (channels[i].toLowerCase() === channelName.toLowerCase()) {
          return;
        }
      }
      channels.push(e.target.channelName.value);
      getChannels()
      console.log(channels);
    })
  } //end getChannels();

  getChannels();

}); //end $(function() {});
