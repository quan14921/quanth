import Navigo from "navigo";
import HomePage from "./page/home";
import AboutPage from "./page/about";
import ProductPage from "./page/product";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("cont").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
      print(AboutPage.render());
    },
    "/product": () => {
      print(ProductPage.render());
    },
});

router.notFound(() => print("Not Found Page"));

router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.duong = luongDuong;
//         this.bot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.duong}
//             Lượng Bột: ${this.bot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// banhDeo.showInfo();
// console.log(banhDeo.duong);