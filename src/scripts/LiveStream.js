export default class LiveStream {
  constructor() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UClFOMH3zrHqx9Sab5e95o-g&key=AIzaSyACup5liIWZnnWqjnzwBiIodBdRMCJIwxc"
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        console.log(data.items[0].snippet.liveBroadcastContent);
        console.log(data.items[0].snippet.liveBroadcastContent === "live");

        if (data.items[0].snippet.liveBroadcastContent === "live") {
          document.querySelector(".swiper-container").innerHTML = "";
          let iframe = document.createElement("iframe");
          iframe.src =
            "https://www.youtube.com/embed/live_stream?channel=UClFOMH3zrHqx9Sab5e95o-g";
          iframe.setAttribute("allowFullScreen", "");
          iframe.style.width = "100%";
          iframe.style.height = "60vh";
          document.querySelector(".swiper-container").appendChild(iframe);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}
