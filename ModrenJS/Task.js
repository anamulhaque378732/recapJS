const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2500,
    inStock: true,
    category: "Electronics",
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 4500,
    inStock: true,
    category: "Electronics",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 3200,
    inStock: false,
    category: "Footwear",
  },
  {
    id: 4,
    title: "Cotton T-Shirt",
    price: 850,
    inStock: true,
    category: "Clothing",
  },
  {
    id: 5,
    title: "Smart Watch",
    price: 5500,
    inStock: true,
    category: "Electronics",
  },
  {
    id: 6,
    title: "Backpack",
    price: 1800,
    inStock: false,
    category: "Accessories",
  },
  {
    id: 7,
    title: "Coffee Mug",
    price: 450,
    inStock: true,
    category: "Kitchen",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    price: 2200,
    inStock: true,
    category: "Electronics",
  },
  {
    id: 9,
    title: "Denim Jeans",
    price: 2100,
    inStock: true,
    category: "Clothing",
  },
  {
    id: 10,
    title: "Water Bottle",
    price: 700,
    inStock: false,
    category: "Kitchen",
  },
];

let product = products
  .sort((a, b) => a.price - b.price)
  .filter((pro) => pro.inStock === true)
  .reduce((acc, curr) => (acc += curr.price), 0);

// console.log(product);

const movies = [
  {
    id: 1,
    title: "Inception",
    publishYear: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
  },
  {
    id: 2,
    title: "The Dark Knight",
    publishYear: 2008,
    rating: 9.0,
    genre: "Action",
  },
  {
    id: 3,
    title: "Interstellar",
    publishYear: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    publishYear: 1994,
    rating: 9.3,
    genre: "Crime",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    publishYear: 2019,
    rating: 8.4,
    genre: "Action",
  },
  {
    id: 6,
    title: "Parasite",
    publishYear: 2019,
    rating: 8.5,
    genre: "Thriller",
  },
  {
    id: 7,
    title: "The Matrix",
    publishYear: 1999,
    rating: 8.7,
    genre: "Sci-Fi",
  },
  {
    id: 8,
    title: "Joker",
    publishYear: 2019,
    rating: 8.3,
    genre: "Crime",
  },
  {
    id: 9,
    title: "Forrest Gump",
    publishYear: 1994,
    rating: 8.8,
    genre: "Drama",
  },
  {
    id: 10,
    title: "Gladiator",
    publishYear: 2000,
    rating: 8.5,
    genre: "Action",
  },
];

let top = movies
  ?.filter((m) => m.genre === "Crime")
  ?.sort((a, b) => b.rating - a.rating)
  ?.map((mo) => ` title: ${mo.title}, ratting:${mo.rating} `);

// console.log(top);
