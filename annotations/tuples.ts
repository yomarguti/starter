const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', false, 10];
const cocacola: Drink = ['black', true, 0];
