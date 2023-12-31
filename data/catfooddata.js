export const catfoods = [
  {
    id: "1",
    brand: "MjAMjAM",
    variety: "Juicy chicken with tasty carrots",
    ingredients: [
      "Chicken (consisting of chicken, liver, heart) (72.5%)",
      "Meat broth (22.4%)",
      "Carrots (4%)",
      "Minerals (1%)",
      "Catnip (0.1%)",
    ],
    analyticalConstituents: [
      "Crude protein (12.0%)",
      "Crude fat (6.0%)",
      "Crude fiber (0.4%)",
      "Crude ash (1.8%)",
      "Calcium (0.3%)",
      "Phosphorus (0.25%)",
      "Moisture (78.0%)",
      "Potassium (0.15%)",
      "Sodium (0.12%)",
    ],
    additives: [
      "Vitamin D3 (200 IU/kg)",
      "Vitamin E (50.0 mg/kg)",
      "Taurine (1,500 mg/kg)",
      "Iodine [as calcium iodate, anhydrous] (0.2 mg/kg)",
      "Manganese [as manganese (II) sulfate] (2.0 mg/kg)",
      "Zinc [as zinc sulfate, monohydrate] (20.0 mg/kg)",
    ],
    type: "wet",
    cat: {
      likes: ["1", "3"],
      dislikes: ["4"],
    },
  },
  {
    id: "2",
    brand: "MjAMjAM",
    variety: "Juicy chicken and wild salmon",
    ingredients: [
      "Chicken (45%)",
      "Meat and salmon broth (28%)",
      "Salmon (26%)",
      "Minerals (0.5%)",
      "Eggshell powder (0.5%)",
    ],
    analyticalConstituents: [
      "Crude protein (11.0%)",
      "Crude fat (6.5%)",
      "Crude fiber (0.4%)",
      "Crude ash (2.1%)",
      "Calcium (0.25%)",
      "Phosphorus (0.2%)",
      "Moisture (79.0%)",
      "Potassium (0.15%)",
      "Sodium (0.12%)",
    ],
    additives: [
      "Vitamin D3 (200 IU/kg)",
      "Vitamin E (50.0 mg/kg)",
      "Taurine (1,500 mg/kg)",
      "Iodine [as calcium iodate, anhydrous] (0.2 mg/kg)",
      "Manganese [as manganese (II) sulfate] (2.0 mg/kg)",
      "Zinc [as zinc sulfate, monohydrate] (20.0 mg/kg)",
    ],
    type: "wet",
    cat: {
      likes: ["2", "4"],
      dislikes: ["1", "4"],
    },
  },
  {
    id: "3",
    brand: "MjAMjAM",
    variety: "Good turkey with steamed pumpkin",
    ingredients: [
      "Turkey (consisting of meat, heart, liver, stomach) (68%)",
      "Meat broth (28%)",
      "Pumpkin (2.9%)",
      "Minerals (1%)",
      "Catnip (0.1%)",
    ],
    analyticalConstituents: [
      "Crude protein (10.5%)",
      "Crude fat (6.5%)",
      "Crude fiber (0.4%)",
      "Crude ash (2.3%)",
      "Calcium (0.3%)",
      "Phosphorus (0.25%)",
      "Moisture (78.0%)",
      "Potassium (0.15%)",
      "Sodium (0.12%)",
    ],
    additives: [
      "Vitamin D3 (200 IU/kg)",
      "Vitamin E (50.0 mg/kg)",
      "Taurine (1,500 mg/kg)",
      "Iodine [as calcium iodate, anhydrous] (0.2 mg/kg)",
      "Manganese [as manganese (II) sulfate] (2.0 mg/kg)",
      "Zinc [as zinc sulfate, monohydrate] (20.0 mg/kg)",
    ],
    type: "wet",
    cat: {
      likes: [],
      dislikes: ["2"],
    },
  },
  {
    id: "4",
    brand: "Wild Freedom Instinctive",
    variety: "Silent Lake - Duck",
    ingredients: ["50% Duck meat", "30% Duck broth", "20% Chicken meat"],
    analyticalConstituents: [
      "Crude protein (14.0%)",
      "Crude fat (3.0%)",
      "Crude fiber (0.09%)",
      "Crude ash (2.0%)",
      "Moisture (75.0%)",
    ],
    additives: ["Taurin 700 mg per kg"],
    type: "wet",
    cat: {
      likes: ["1", "3", "4"],
      dislikes: [],
    },
  },
  {
    id: "5",
    brand: "Wild Freedom Instinctive",
    variety: "Wild Rapids - Chicken with Salmon",
    ingredients: ["50% Chicken meat", "30% Fish broth", "20% Salmon"],
    analyticalConstituents: [
      "Crude protein (13.0%)",
      "Crude fat (3.0%)",
      "Crude fiber (0.5%)",
      "Crude ash (1.5%)",
      "Moisture (77.0%)",
    ],
    additives: ["Taurin 700 mg per kg"],
    type: "wet",
    cat: {
      likes: [],
      dislikes: ["2", "5"],
    },
  },
];
