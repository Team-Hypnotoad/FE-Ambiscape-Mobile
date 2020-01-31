const scenarios = [
  {
    name: "Italian Birds",
    slug: "italianbirds",
    creator_id: 1,
    color_scheme: ["#561D25", "#CE8147", "#ECDD7B", "#D3E298", "#CDE7BE"],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 1,
        volume: 0.7,
        pan: 0.5
      },
      {
        id: 2,
        volume: 0.6,
        pan: 0.4,
        frequency: 0.3
      },
      {
        id: 3,
        volume: 0.4,
        pan: 0.2,
        frequency: 0.6
      },
      {
        id: 4,
        volume: 0.8,
        pan: 0.8,
        frequency: 0.4
      },
      {
        id: 5,
        volume: 0.1,
        pan: 0.1,
        frequency: 0.1
      }
    ]
  },
  {
    name: "Docks",
    slug: "docks",
    creator_id: 2,
    color_scheme: ["#561D25", "#CE8147", "#ECDD7B", "#D3E298", "#CDE7BE"],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 6,
        volume: 0.7,
        pan: 0.3
      },
      {
        id: 7,
        volume: 0.3,
        pan: 0.7
      },
      {
        id: 8,
        volume: 0.6,
        pan: 0.2,
        frequency: 0.6
      }
      // {
      //   id: 9,
      //   volume: 0.5,
      //   pan: 0.8,
      //   frequency: 0.2
      // }
    ]
  }
];

export default scenarios;
