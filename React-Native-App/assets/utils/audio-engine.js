import { audioData } from "../data/sound-index";
import { Audio } from "expo-av";
// const spatial = require("howler/src/plugins/howler.spatial.js");

let allHowls = {};
let loops = {};
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
  if (type === "random") {
    loops[slug] = true;
  }
};

export const loadHowlsForOneChannel = channel => {
  const { urls } = channel;
  urls.forEach(url => {
    createHowl(channel, url);
  });
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
  if (allHowls[url] && vol) {
    thisHowl.setStatusAsync({
      shouldPlay: true,
      volume: vol
    });
  }
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


export const playBackgroundHowls = channels => {
  if (!allHowls) {
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

export const muteAll = () => {
  Audio.setIsEnabledAsync(false);
};

export const unmuteAll = () => {
  Audio.setIsEnabledAsync(true);
};

export const muteIndividualSound = (url, bool) => {
  const thisHowl = allHowls[url];
  thisHowl.setStatusAsync({ isMuted: !bool });
};

export const startOneRandomChannel = (slug, frequency, playNext) => {

  if (frequency) {
    loops[slug] = true;
    loop(slug, frequency, playNext);
  } else {
  
    loops[slug] = true;
  }
};

export const stopOneRandomChannel = slug => {

  loops[slug] = false;


};

export const loop = (slug, frequency, playNext) => {
  const standardInterval = (1 - frequency) * 16000 + 4000;
  const intervalVariation = (standardInterval / 5) * Math.random();
  const thisInterval = standardInterval + intervalVariation;
  setTimeout(() => {
    if (loops[slug] === true) {
      playNext(slug);
      console.log(`Interval: ${thisInterval}ms`);
    }
    loop(slug, frequency, playNext);
  }, thisInterval);
};
