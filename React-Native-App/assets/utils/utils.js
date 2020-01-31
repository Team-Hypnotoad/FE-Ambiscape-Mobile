import * as api from "./api";

export const getSlugsFromChannels = (channelsArray, type) => {
  const filteredChannels = channelsArray.filter(channel => {
    return channel.type === type;
  });
  return filteredChannels.map(channel => {
    return channel.slug;
  });
};
