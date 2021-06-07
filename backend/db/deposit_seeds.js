const testUser = { "password" : "asdf", "__v" : 0, "username" : "Saitama" }

const testDeposit = [
  //SEPTEMBER

  { user_id: testUser, depositDate: "2020-09-02", amount: 200000, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-09-03", amount: 350000, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-09-04", amount: 80000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-09-05", amount: 136600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-09-09", amount: 245300, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-09-10", amount: 85900, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-09-11", amount: 156600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-09-12", amount: 129600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-09-16", amount: 98800, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-09-17", amount: 42000, category: ["credit"], notes: "Weekly credit deposit. Machine down most of week" },
  { user_id: testUser, depositDate: "2020-09-18", amount: 69600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-09-19", amount: 95500, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-09-23", amount: 356600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-09-24", amount: 115500, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-09-25", amount: 136600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-09-26", amount: 99600, category: ["ritual"], notes: "Weekly ritual deposit" },
  { user_id: testUser, depositDate: "2020-09-30", amount: 50000, category: ["subsidy", "electric"], notes: "electric bill subsidy" },

  //OCTOBER

  { user_id: testUser, depositDate: "2020-10-01", amount: 366500, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-10-02", amount: 49900, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-10-03", amount: 63500, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-10-07", amount: 800800, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-10-08", amount: 909000, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-10-09", amount: 135500, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-10-10", amount: 91200, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-10-14", amount: 90000, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-10-15", amount: 42000, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-10-16", amount: 145600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-10-17", amount: 169500, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-10-21", amount: 85400, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-10-22", amount: 96800, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-10-23", amount: 145500, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-10-24", amount: 263300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-10-28", amount: 125600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-10-29", amount: 115400, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-10-30", amount: 178900, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-10-31", amount: 265900, category: ["ritual"], notes: "Weekly ritual deposit" },
  { user_id: testUser, depositDate: "2020-10-31", amount: 1000000, category: ["subsidy", "ontario"], notes: "Ontario subsidy" },


  //NOVEMBER

  { user_id: testUser, depositDate: "2020-11-04", amount: 800800, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-11-05", amount: 164500, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-11-06", amount: 163200, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-11-07", amount: 303000, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-11-11", amount: 126500, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-11-12", amount: 198500, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-11-13", amount: 260000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-11-14", amount: 159600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-11-18", amount: 126600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-11-19", amount: 50000, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-11-20", amount: 289900, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-11-21", amount: 221300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-11-25", amount: 165800, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-11-26", amount: 116900, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-11-27", amount: 144200, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-11-28", amount: 202000, category: ["ritual"], notes: "Weekly ritual deposit" },
  { user_id: testUser, depositDate: "2020-11-30", amount: 500000, category: ["subsidy"], notes: "Federal subsidy" },

  //DECEMBER

  { user_id: testUser, depositDate: "2020-12-02", amount: 163500, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-12-03", amount: 156300, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-12-04", amount: 178900, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-12-05", amount: 196300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-12-09", amount: 153600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-12-10", amount: 223300, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-12-11", amount: 202100, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-12-12", amount: 158900, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-12-16", amount: 298600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-12-17", amount: 179600, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-12-18", amount: 326300, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-12-19", amount: 235600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-12-23", amount: 348900, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-12-24", amount: 369800, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2020-12-25", amount: 420600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2020-12-26", amount: 283600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2020-12-30", amount: 566300, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2020-12-31", amount: 603200, category: ["credit"], notes: "Weekly credit deposit" },

  //JANUARY

  { user_id: testUser, depositDate: "2021-01-01", amount: 186300, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-01-02", amount: 269600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-01-06", amount: 145600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-01-07", amount: 186900, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-01-08", amount: 217500, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-01-09", amount: 169600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-01-13", amount: 299900, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-01-14", amount: 306800, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-01-15", amount: 350000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-01-16", amount: 243300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-01-20", amount: 356400, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-01-21", amount: 364200, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-01-22", amount: 459600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-01-23", amount: 325600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-01-27", amount: 332100, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-01-28", amount: 345600, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-01-29", amount: 435600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-01-30", amount: 269600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-01-31", amount: 250000, category: ["subsidy"], notes: "Digital Marketing subsidy" },

  //FEBRUARY

  { user_id: testUser, depositDate: "2021-02-03", amount: 136500, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-02-04", amount: 115200, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-02-05", amount: 220000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-02-06", amount: 265800, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-02-10", amount: 110200, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-02-11", amount: 168900, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-02-12", amount: 422300, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-02-13", amount: 256300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-02-17", amount: 326500, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-02-18", amount: 350000, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-02-19", amount: 495200, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-02-20", amount: 315600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-02-24", amount: 412600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-02-25", amount: 412600, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-02-26", amount: 433300, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-02-27", amount: 302600, category: ["ritual"], notes: "Weekly ritual deposit" },


  //MARCH

  { user_id: testUser, depositDate: "2021-03-03", amount: 452300, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-03-04", amount: 462300, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-03-05", amount: 410000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-03-06", amount: 386900, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-03-10", amount: 495200, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-03-11", amount: 485200, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-03-12", amount: 405600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-03-13", amount: 415600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-03-17", amount: 436900, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-03-18", amount: 448900, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-03-19", amount: 513200, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-03-20", amount: 495300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-03-24", amount: 496300, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-03-25", amount: 500900, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-03-26", amount: 526900, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-03-27", amount: 496300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-03-31", amount: 496300, category: ["cash"], notes: "Weekly cash deposit" },


  //APRIL

  { user_id: testUser, depositDate: "2021-04-01", amount: 527400, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-04-02", amount: 487500, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-04-03", amount: 496300, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-04-07", amount: 512500, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-04-08", amount: 459600, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-04-09", amount: 396500, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-04-10", amount: 400100, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-04-14", amount: 475200, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-04-15", amount: 461700, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-04-16", amount: 510000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-04-17", amount: 509600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-04-21", amount: 501800, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-04-22", amount: 500400, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-04-23", amount: 542000, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-04-24", amount: 408700, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-04-28", amount: 493600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-04-29", amount: 532600, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-04-30", amount: 514800, category: ["uber"], notes: "Weekly uber-eats deposit" },

  //MAY

  { user_id: testUser, depositDate: "2021-05-01", amount: 423000, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-05-05", amount: 489600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-05-06", amount: 546300, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-05-07", amount: 458900, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-05-08", amount: 263000, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-05-12", amount: 423600, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-05-13", amount: 485200, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-05-14", amount: 429600, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-05-15", amount: 425600, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-05-19", amount: 418900, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-05-20", amount: 623600, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-05-21", amount: 356200, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-05-22", amount: 475200, category: ["ritual"], notes: "Weekly ritual deposit" },

  { user_id: testUser, depositDate: "2021-05-26", amount: 595400, category: ["cash"], notes: "Weekly cash deposit" },
  { user_id: testUser, depositDate: "2021-05-27", amount: 604500, category: ["credit"], notes: "Weekly credit deposit" },
  { user_id: testUser, depositDate: "2021-05-28", amount: 512300, category: ["uber"], notes: "Weekly uber-eats deposit" },
  { user_id: testUser, depositDate: "2021-05-29", amount: 523300, category: ["ritual"], notes: "Weekly ritual deposit" }

  //JUNE

  // { user_id: testUser, depositDate: "2021-06-02", amount: 933, category: ["cash"], notes: "Weekly cash deposit" },
  // { user_id: testUser, depositDate: "2021-06-03", amount: 1111, category: ["credit"], notes: "Weekly credit deposit" },
  // { user_id: testUser, depositDate: "2021-06-04", amount: 880, category: ["uber"], notes: "Weekly uber-eats deposit" },
  // { user_id: testUser, depositDate: "2021-06-05", amount: 450, category: ["ritual"], notes: "Weekly ritual deposit" },

  // { user_id: testUser, depositDate: "2021-06-09", amount: 766, category: ["cash"], notes: "Weekly cash deposit" },
  // { user_id: testUser, depositDate: "2021-06-10", amount: 966, category: ["credit"], notes: "Weekly credit deposit" },
  // { user_id: testUser, depositDate: "2021-06-11", amount: 750, category: ["uber"], notes: "Weekly uber-eats deposit" },
  // { user_id: testUser, depositDate: "2021-06-12", amount: 800, category: ["ritual"], notes: "Weekly ritual deposit" },

  // { user_id: testUser, depositDate: "2021-06-16", amount: 800, category: ["cash"], notes: "Weekly cash deposit" },
  // { user_id: testUser, depositDate: "2021-06-17", amount: 1200, category: ["credit"], notes: "Weekly credit deposit" },
  // { user_id: testUser, depositDate: "2021-06-18", amount: 666, category: ["uber"], notes: "Weekly uber-eats deposit" },
  // { user_id: testUser, depositDate: "2021-06-19", amount: 820, category: ["ritual"], notes: "Weekly ritual deposit" },

  // { user_id: testUser, depositDate: "2021-06-23", amount: 899, category: ["cash"], notes: "Weekly cash deposit" },
  // { user_id: testUser, depositDate: "2021-06-24", amount: 1166, category: ["credit"], notes: "Weekly credit deposit" },
  // { user_id: testUser, depositDate: "2021-06-25", amount: 677, category: ["uber"], notes: "Weekly uber-eats deposit" },
  // { user_id: testUser, depositDate: "2021-06-26", amount: 963, category: ["ritual"], notes: "Weekly ritual deposit" },

  // { user_id: testUser, depositDate: "2021-06-02", amount: 1200, category: ["cash"], notes: "Weekly cash deposit" }
];

module.exports = testDeposit