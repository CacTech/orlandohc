const stations = [
  {
    name: "XENR",
    url: "https://stream-142.zeno.fm/temlrqbzt0vvv?zt=..."
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
    url: "https://enlinea-r1.rancherita.com.mx/listen/rancherita_del_aire/radio.mp3"
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
    name: "Harrys Radio",
    url: "http://stream.streamaudio.de:8000/harrys-radio-station"
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
    url: "https://18863.live.streamtheworld.com/XEAJAMAAC.aac"
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
    name: "IMAGEN CDMX",
    url: "https://us-b4-p-e-pb13-audio.cdn.mdstrm.com/live-audio-aw/64a44d807cb6630627ab0c82?aid=64a43cdb8d930205d958b6b5&property=tunein&DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTc3OTczNTU2NiwiaXNzIjoidGlzcnYifQ.gPXNVNImrLYR6CUsisirXYuWDkC-1yluK9C-Qd93iCM&pid=mKdwMlxzDQvcPMn0naKYY3P5LqQ2c5Jw&sid=hoW93lIDPHEXCtoMxJ3KXbRZyjMRmeSr&uid=l5yzoM6zPKh0oecoi9uE1Z9IKZLvJ8QJ&es=us-b4-p-e-pb13-audio.cdn.mdstrm.com&ote=1779821977304&ot=iGhpmBy182EdVe0EKlqkog&proto=https&pz=us&cP=128000&awCollectionId=64a43cdb8d930205d958b6b5&aw_0_1st.playerId=tunein&liveId=64a44d807cb6630627ab0c82&referer=https%3A%2F%2Ftunein.com%2F&propertyName=tunein&propertyType=rss-app&listenerId=l5yzoM6zPKh0oecoi9uE1Z9IKZLvJ8QJ"
  }
];

let currentIndex = 0;

const player = document.getElementById("player");
const stationName = document.getElementById("stationName");

function changeStation() {

  const station = stations[currentIndex];

  player.src = station.url;

  stationName.innerText =
    station.name +
    " (" + (currentIndex + 1) + "/" + stations.length + ")";

  player.play();

  localStorage.setItem("lastStation", currentIndex);

  // 🔥 MEDIA SESSION API (CONTROL LOCK SCREEN)
  if ('mediaSession' in navigator) {

    navigator.mediaSession.metadata = new MediaMetadata({
      title: station.name,
      artist: "Radio Roll HC",
      album: "Live Radio",
      artwork: [
        {
          src: "https://orlandohc.netlify.app/icons/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => player.play());

    navigator.mediaSession.setActionHandler('pause', () => player.pause());

    navigator.mediaSession.setActionHandler('nexttrack', () => nextStation());

    navigator.mediaSession.setActionHandler('previoustrack', () => prevStation());
  }
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

function refreshPage() {
  location.reload();
}

function refreshPage() {

  player.pause();
  player.load();
  player.play();

}
