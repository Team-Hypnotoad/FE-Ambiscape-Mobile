import { audioData } from "../data/sound-index";
import { Audio } from "expo-av";
// const spatial = require("howler/src/plugins/howler.spatial.js");

let allHowls = {};
let shouldPlay = false;

const createHowl = (channel, url) => {
  const { stereo, loop, html5, type, slug } = channel;
  const filePath = audioData[type][slug][url];
  const thisHowl = new Audio.Sound();
  thisHowl.loadAsync(filePath, {
    isLooping: true,
    shouldPlay: false,
    volume: 1
  });
  allHowls[url] = thisHowl;
};

export const loadAllHowls = channels => {
  channels.forEach(channel => {
    const { urls, slug } = channel;
    urls.forEach(url => {
      createHowl(channel, url);
    });
  });
};

export const playHowl = (url, vol, pan) => {
  const thisHowl = allHowls[url];
  if (vol) {
    thisHowl.playAsync();
  }
  // if (allHowls[url]) {
  //   console.log(`Playing ${url}`);
  //   thisHowl.playAsync();
  // }
};

export const stopHowl = url => {
  if (allHowls[url]) {
    allHowls[url].stopAsync();
  }
};

export const changeVolumeOfHowl = (url, volume) => {
  console.log(volume);
  if (allHowls[url]) {
    allHowls[url].setStatusAsync({ volume: volume });
  }
};

// export const changePanOfHowl = (url, pan) => {
//   const thisPan = parseFloat(pan);
//   if (allHowls[url]) {
//     allHowls[url].stereo(thisPan);
//   }
// };

export const playBackgroundHowls = channels => {
  if (!allHowls) {
    console.log("ERROR = No sounds loaded");
  } else {
    channels.forEach(channel => {
      const { type, urls } = channel;
      const thisURL = urls[0];
      if (type === "background") {
        playHowl(thisURL);
      }
    });
  }
};

export const startRandomHowls = () => {
  shouldPlay = true;
};

export const stopRandomHowls = () => {
  shouldPlay = false;
};

export const clearAllHowls = () => {
  Howler.volume(0);
  allHowls = {};
  Howler.volume(1);
};

export const loop = (slug, playNext) => {
  const thisInterval = Math.random() * 5000 + 1000;
  setTimeout(() => {
    playNext(slug);
    if (shouldPlay) {
      loop(slug, playNext);
    }
  }, thisInterval);
};

// export const muteAll = () => {
//   Howler.volume(0);
// };

// export const unmuteAll = () => {
//   Audio.volume(1);
// };
