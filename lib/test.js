const subs = [
  { userName: "Lisa", yearSub: 2022 },
  { userName: "Akim", yearSub: 2020 },
  { userName: "Lola", yearSub: 2020 },
];

const subsByYear = Object.groupBy(subs, (user) => {
  return user.yearSub;
});

const combinedNavigation = [
  { id: 1, label: "Home", link: "/", parent: null },
  { id: 2, label: "About", link: "/about", parent: null },
  { id: 3, label: "Services", link: "/services", parent: null },
  { id: 4, label: "Contact", link: "/contact", parent: null },
  { id: 5, label: "Products", link: "/products", parent: null },
  { id: 6, label: "Electronics", link: "/electronics", parent: "Products" },
  { id: 7, label: "Clothing", link: "/clothing", parent: "Products" },
  { id: 8, label: "Books", link: "/books", parent: "Products" },
  { id: 9, label: "Services", link: "/services", parent: "About" },
  { id: 10, label: "Team", link: "/team", parent: "About" }, // Additional child label
  { id: 11, label: "Vision", link: "/vision", parent: "About" }, // Additional child label
  { id: 12, label: "Mission", link: "/mission", parent: "About" }, // Additional child label
];

const parentB = Object.groupBy(data.filter((d) => d.name === "Parent B"));
