import { initStore } from "./store";

const configureProductStore = () => {
  const actions = {
    ADD_ITEMS: (curState) => {
      return { products: curState.products };
    },
  };

  initStore(actions, {
    products: [
      {
        title: "Grilled Corn",
        subHead: "150",
        initPrice: 1.75,
        price: 1.75,
        img: "grilled-corn.png",
        id: 0,
      },
      {
        title: "Ranch Burger",
        subHead: "1500",
        initPrice: 8.75,
        price: 8.75,
        img: "ranch-burger.jpeg",
        id: 1,
      },
      {
        title: "Fettuccine Pasta",
        subHead: "1200",
        initPrice: 10.75,
        price: 10.75,
        img: "fettuccine-alfredo.jpeg",
        id: 2,
      },
      {
        title: "Stuffed File Steak",
        subHead: "1450",
        initPrice: 15.75,
        price: 15.75,
        img: "stuffed-filet-steak.jpeg",
        id: 3,
      },
    ],
  });
};

export default configureProductStore;
