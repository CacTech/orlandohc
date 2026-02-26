const stations = [
  {
    name: "XENR",
    url: "https://stream-142.zeno.fm/temlrqbzt0vvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0ZW1scnFienQwdnZ2IiwiaG9zdCI6InN0cmVhbS0xNDIuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ilc3cTFIdzNiUVdLaEpNYjRHelZ1b0EiLCJpYXQiOjE3Njg0MjczOTAsImV4cCI6MTc2ODQyNzQ1MH0.Ue95nLznupFtfwtIfdWAcwahTHbYt5MA-sOa8kMqgas"
  },
  {
    name: "LikeFM",
    url: "https://streamingcwsradio30.com:7080/stream/1/"
  },
  {
    name: "Gallito XHSJ",
    url: "https://radio.rcg.com.mx:7001/stream/1/"
  },
  {
    name: "XEBX Sabinas",
    url: "https://streamingcwsradio30.com:7112/;"
  },
  {
    name: "La Rancherita del Aire",
    url: "https://ais-sa3.cdnstream1.com/2695_64.aac"
  },
  {
    name: "AW 101.3 Mty",
    url: "https://mdstrm.com/audio/67378ab60639b6fb47c91763/icecast.audio?property=mmradio"
  },
  {
    name: "Radio Centro Apizaco",
    url: "https://radioenhd.com/8212/;"
  },
  {
    name: "Hot Tejano Austin",
    url: "https://hemnos.cdnstream.com/1113_96"
  },
  {
    name: "Fuego 101.9",
    url: "https://17843.live.streamtheworld.com/KHHMFMAAC.aac"
  },
  {
    name: "Noize Nación",
    url: "https://a11.asurahosting.com:8940/radio.mp3"
  },
  {
    name: "Radio 538",
    url: "https://25633.live.streamtheworld.com/RADIO538.mp3"
  },
  {
    name: "Urbana Play",
    url: "https://cdn.instream.audio/:9660/stream"
  },
  {
    name: "Rinse FM",
    url: "https://admin.stream.rinse.fm/proxy/rinse_uk/stream"
  },
  {
    name: "AH.FM",
    url: "https://nl.ah.fm/live"
  },
  {
    name: "113.FM BPM",
    url: "https://113fm.cdnstream1.com/1736_128?cb=139271.mp3"
  },
  {
    name: "ChillTrax",
    url: "https://streamssl.chilltrax.com/"
  },
  {
    name: "Hot Hitz",
    url: "https://pureplay.cdnstream1.com/6027_128.mp3"
  },
  {
    name: "RoadFM",
    url: "https://infra.roadfm.fr/listen/road_fm/roadfm128"
  },
  {
    name: "Truckers",
    url: "https://live.truckers.fm/"
  },
  {
    name: "Top 40",
    url: "https://free.rcast.net/250199"
  },
  {
    name: "The Buzz",
    url: "https://listen.181fm.com/181-buzz_128k.mp3"
  },
  {
    name: "Rock 2k Virgin",
    url: "https://icy.unitedradio.it/Virgin_02.mp3"
  },
  {
    name: "La Primera 88.9 Saltillo",
    url: "https://27053.live.streamtheworld.com/XHAJFMAAC.aac"
  },
  {
    name: "Reel Countri WI",
    url: "https://das-edge09-live365-dal03.cdnstream.com/a76502"
  },
  {
    name: "The Ranch",
    url: "https://free.rcast.net/208881"
  },
  {
    name: "1920's",
    url: "https://2.mystreaming.net/uber/boomerang1920s/icecast.audio"
  },
  {
    name: "Smooth Jazz NY",
    url: "https://das-edge09-live365-dal03.cdnstream.com/a49349"
  },
  {
    name: "IMAGEN Saltillo",
    url: "https://18363.live.streamtheworld.com/XEDAFMAAC_SC"
  }
];

let currentIndex = 0;

const player = document.getElementById("player");
const stationName = document.getElementById("stationName");

function changeStation() {

  player.src = stations[currentIndex].url;

  // 👇 AQUÍ es donde se pone
  stationName.innerText =
    stations[currentIndex].name +
    " (" + (currentIndex + 1) + "/" + stations.length + ")";

  player.play();

  localStorage.setItem("lastStation", currentIndex);
}

function nextStation() {
  currentIndex++;

  if (currentIndex >= stations.length) {
    currentIndex = 0;
  }

  changeStation();
}

function prevStation() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = stations.length - 1;
  }

  changeStation();
}

window.onload = function() {

  const saved = localStorage.getItem("lastStation");

  if (saved !== null) {
    currentIndex = parseInt(saved);
  }

  changeStation();
};