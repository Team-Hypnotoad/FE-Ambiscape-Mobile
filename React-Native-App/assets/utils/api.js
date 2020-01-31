import sounds from "../data/sounds";
import scenarios from "../data/scenarios";

export const getScenarioBySlug = slug => {
  const filteredScenarios = scenarios.filter(scenario => {
    return scenario.slug === slug;
  });
  return filteredScenarios[0];
};

export const getSoundById = id => {
  const filteredSounds = sounds.filter(sound => {
    return sound.id === id;
  });
  return filteredSounds[0];
};

export const getAllScenarios = () => {
  return scenarios;
};
