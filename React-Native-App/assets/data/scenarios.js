const scenarios = [
  {
    name: "Forest",
    slug: "forest",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 519,
        slug: "smallstream",
        volume: 0.7,
        pan: 0.5
      },
      {
        id: 521,
        slug: "summerambience",
        volume: 0.55,
        pan: -0.3
      },
      {
        id: 23,
        slug: "woodpecker",
        volume: 0.7,
        pan: 0,
        frequency: 0.2
      },
      {
        id: 22,
        slug: "woodpidgeon",
        volume: 0.7,
        pan: -0.43,
        frequency: 0.5
      },
      {
        id: 2,
        slug: "blackbird",
        volume: 0.47,
        pan: 0.4,
        frequency: 0.5
      },
      {
        id: 1,
        slug: "bee",
        volume: 0.45,
        pan: 0,
        frequency: 0.2
      }
      // {
      //   id: 19,
      //   slug: "treefalling",
      //   volume: 0.7,
      //   pan: 0,
      //   frequency: 0.5
      // }
    ]
  },
  {
    name: "Beach",
    slug: "beach",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 513,
        slug: "oceanwaves1",
        volume: 0.82,
        pan: -0.65
      },
      {
        id: 514,
        slug: "oceanwaves2",
        volume: 0.9,
        pan: 0.5
      },
      // {
      //   id: 515,
      //   slug: "parrots",
      //   volume: 0.7,
      //   pan: 0
      // },
      {
        id: 14,
        slug: "seagull",
        volume: 0.4,
        pan: 0.25,
        frequency: 0.5
      },
      {
        id: 21,
        slug: "watersplash",
        volume: 0.5,
        pan: 0,
        frequency: 0.5
      },
      {
        id: 13,
        slug: "sailflapping",
        volume: 0.5,
        pan: -0.5,
        frequency: 0.15
      },
      {
        id: 12,
        slug: "parrot",
        volume: 0.6,
        pan: 0.4,
        frequency: 0.5
      }
    ]
  },
  {
    name: "City",
    slug: "city",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 504,
        slug: "citytraffic",
        volume: 0.7,
        pan: 0.4
      },
      {
        id: 503,
        slug: "cityrumbling",
        volume: 0.5,
        pan: -0.4
      },
      {
        id: 24,
        slug: "construction",
        volume: 0.3,
        pan: 0.5,
        frequency: 0.1
      },
      {
        id: 18,
        slug: "traffic",
        volume: 0.25,
        pan: 0,
        frequency: 0.1
      },
      {
        id: 7,
        slug: "cyclist",
        volume: 0.35,
        pan: -0.43,
        frequency: 0.17
      }
    ]
  },
  {
    name: "Woodland Camp",
    slug: "woodland",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 505,
        slug: "crickets",
        volume: 0.06,
        pan: 0.34
      },
      {
        id: 501,
        slug: "campfire",
        volume: 0.8,
        pan: -0.6
      },
      {
        id: 518,
        slug: "rumblingfire",
        volume: 0.68,
        pan: 0.3
      },
      {
        id: 9,
        slug: "fireburst",
        volume: 0.6,
        pan: 0,
        frequency: 0.3
      },
      {
        id: 1,
        slug: "bee",
        volume: 0.06,
        pan: 0,
        frequency: 0.1
      },
      {
        id: 10,
        slug: "frog",
        volume: 0.2,
        pan: -0.64,
        frequency: 0.25
      }
    ]
  },
  {
    name: "Birdsong",
    slug: "birdsong",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 512,
        slug: "morningbirds",
        volume: 0.6,
        pan: -0.71
      },
      {
        id: 521,
        slug: "summerambience",
        volume: 0.16,
        pan: 0.6
      },
      {
        id: 2,
        slug: "blackbird",
        volume: 0.2,
        pan: 0.47,
        frequency: 0.12
      },
      {
        id: 4,
        slug: "chaffinch",
        volume: 0.18,
        pan: -0.5,
        frequency: 0.07
      },
      {
        id: 6,
        slug: "cuckoo",
        volume: 0.013,
        pan: -0.38,
        frequency: 0.02
      },
      {
        id: 22,
        slug: "woodpidgeon",
        volume: 0.14,
        pan: 0,
        frequency: 0.09
      },
      {
        id: 16,
        slug: "songthrush",
        volume: 0.22,
        pan: -0.55,
        frequency: 0.04
      }
    ]
  },
  {
    name: "Waterfall",
    slug: "waterfall",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 511,
        slug: "largewaterfall",
        volume: 0.62,
        pan: -0.35
      },
      {
        id: 520,
        slug: "snowstorm",
        volume: 0.2,
        pan: 0.24
      },
      {
        id: 20,
        slug: "waterdrops",
        volume: 0.36,
        pan: -0.16,
        frequency: 0.3
      },
      {
        id: 21,
        slug: "watersplash",
        volume: 0.27,
        pan: -0.38,
        frequency: 0.02
      }
    ]
  },
  {
    name: "Farmyard",
    slug: "farmyard",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 506,
        slug: "englishsheep",
        volume: 0.55,
        pan: 0.41
      },
      {
        id: 508,
        slug: "italianbirds",
        volume: 0.36,
        pan: -0.41
      },
      {
        id: 15,
        slug: "sheep",
        volume: 0.06,
        pan: 0.49,
        frequency: 0.04
      },
      {
        id: 5,
        slug: "cow",
        volume: 0.11,
        pan: -0.59,
        frequency: 0.06
      },
      {
        id: 11,
        slug: "horse",
        volume: 0.09,
        pan: 0.67,
        frequency: 0.03
      },
      {
        id: 3,
        slug: "bull",
        volume: 0.04,
        pan: -0.66,
        frequency: 0.04
      },
      {
        id: 8,
        slug: "deer",
        volume: 0.08,
        pan: 0.42,
        frequency: 0.04
      }
    ]
  },
  {
    name: "Rainstorm",
    slug: "rainstorm",
    creator_id: 0,
    color_scheme: [],
    is_public: true,
    likes: 0,
    sounds: [
      {
        id: 516,
        slug: "rain1",
        volume: 0.7,
        pan: -0.66
      },
      {
        id: 517,
        slug: "rain2",
        volume: 0.6,
        pan: 0.42
      },
      {
        id: 17,
        slug: "thunder",
        volume: 0.4,
        pan: 0,
        frequency: 0.17
      },
      {
        id: 20,
        slug: "waterdrops",
        volume: 0.15,
        pan: 0.39,
        frequency: 0.16
      }
    ]
  }
];

export default scenarios;
