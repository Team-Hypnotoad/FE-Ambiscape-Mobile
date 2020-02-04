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
    shouldPlay: false,
    isLooping: loop
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

export const playHowl = (url, vol) => {
  const thisHowl = allHowls[url];
  console.log(url);
  if (vol > 0) {
    thisHowl.setStatusAsync({
      shouldPlay: true,
      volume: vol
    });
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
      const { type, urls, volume } = channel;
      const thisURL = urls[0];
      if (type === "background") {
        playHowl(thisURL, volume);
      }
    });
  }
};

export const startRandomHowls = () => {
  console.log("started random howls");
  shouldPlay = true;
};

export const stopRandomHowls = () => {
  console.log("stopped random howls");
  shouldPlay = false;
};

export const clearAllHowls = () => {
  Howler.volume(0);
  allHowls = {};
  Howler.volume(1);
};

export const loop = (slug, frequency, playNext) => {
  const standardInterval = (1 - frequency) * 16000 + 4000;
  const intervalVariation = (standardInterval / 5) * Math.random();
  const thisInterval = standardInterval + intervalVariation;

  setTimeout(() => {
    if (shouldPlay) {
      playNext(slug);
      console.log(`Interval: ${thisInterval}ms`);
      loop(slug, frequency, playNext);
    }
  }, thisInterval);
};
export const muteAll = () => {
  Audio.setIsEnabledAsync(false);
};

export const unmuteAll = () => {
  Audio.setIsEnabledAsync(true);
};
