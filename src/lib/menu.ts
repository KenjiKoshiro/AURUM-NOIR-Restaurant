export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "appetizer" | "main" | "dessert" | "drink";
  dietary: ("vegetarian" | "gluten-free" | "spicy")[];
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Arancini",
    description:
      "Crispy risotto balls, black truffle, aged mozzarella, saffron aioli",
    price: "$22",
    category: "appetizer",
    dietary: ["vegetarian"],
  },
  {
    id: 2,
    name: "Seared Scallops",
    description: "Cauliflower velouté, pancetta crumble, caviar pearls",
    price: "$28",
    category: "appetizer",
    dietary: ["gluten-free"],
  },
  {
    id: 3,
    name: "Burrata & Heirloom",
    description:
      "Hand-pulled burrata, heirloom tomatoes, aged balsamic, basil oil",
    price: "$24",
    category: "appetizer",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 4,
    name: "Filet Mignon",
    description: "8oz grass-fed tenderloin, truffle pomme purée, bordelaise",
    price: "$82",
    category: "main",
    dietary: ["gluten-free"],
  },
  {
    id: 5,
    name: "Lobster Linguine",
    description: "Live lobster, Amalfi lemon, champagne cream, bottarga",
    price: "$68",
    category: "main",
    dietary: [],
  },
  {
    id: 6,
    name: "Wild Mushroom Risotto",
    description:
      "Carnaroli, porcini, chanterelle, aged Parmesan, white truffle oil",
    price: "$46",
    category: "main",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 7,
    name: "Duck Confit",
    description:
      "Slow-cooked duck leg, cherry gastrique, roasted heritage vegetables",
    price: "$54",
    category: "main",
    dietary: ["gluten-free"],
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Madagascar vanilla bean, caramelised Demerara crust",
    price: "$18",
    category: "dessert",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 9,
    name: "Valrhona Tart",
    description: "72% dark ganache, raspberry coulis, edible gold leaf",
    price: "$22",
    category: "dessert",
    dietary: ["vegetarian"],
  },
  {
    id: 10,
    name: "Seasonal Sorbet",
    description: "Three house-made sorbets, seasonal fruit, elderflower syrup",
    price: "$16",
    category: "dessert",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 11,
    name: "Signature Cocktail",
    description: "Award-winning gin, elderflower, yuzu, champagne foam",
    price: "$22",
    category: "drink",
    dietary: [],
  },
  {
    id: 12,
    name: "Sommelier Selection",
    description: "Curated glass from our 500-bottle cellar",
    price: "$18–$38",
    category: "drink",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 13,
    name: "Craft Mocktail",
    description:
      "House-pressed botanicals, fresh herbs, sparkling spring water",
    price: "$14",
    category: "drink",
    dietary: ["vegetarian", "gluten-free"],
  },
];

export function filterMenu(
  items: MenuItem[],
  query: string,
  category: string,
  dietary: string,
  sort: string,
) {
  const term = query.trim().toLocaleLowerCase();
  const filtered = items.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      (dietary === "all" || item.dietary.some((value) => value === dietary)) &&
      `${item.name} ${item.description}`.toLocaleLowerCase().includes(term),
  );
  const price = (item: MenuItem) => Number(item.price.match(/\d+/)?.[0] ?? 0);
  if (sort === "price-asc") filtered.sort((a, b) => price(a) - price(b));
  if (sort === "price-desc") filtered.sort((a, b) => price(b) - price(a));
  return filtered;
}
