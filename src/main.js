import Navigo from "navigo";
import HomePage from "./page/home";
import ProductPage from "./page/product";
import DetailNewsPage from "./page/detailNews";
import dashboardPage from "./admin/dashboard";
import signinPage from "./page/signin";
import signupPage from "./page/signup";
import AdminnewsPage from "./admin/news/indexx";
import addnewsPage from "./admin/news/add";
import editnewsPage from "./admin/news/edit";
import AdminspPage from "./admin/news/sanpham";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("cont").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/admin/dashboard": () => {
      print(dashboardPage.render());
    },
    "/product": () => {
      print(ProductPage.render());
    },
    "/admin/news": () => {
      print(AdminnewsPage.render());
    },
    "/admin/products": () => {
      print(AdminspPage.render());
    },
    "/admin/news/add": () => {
      print(addnewsPage.render());
    },
    "/admin/news/edit": () => {
      print(editnewsPage.render());
    },
    "/signin": () => {
      print(signinPage.render());
    },
    "/signup": () => {
      print(signupPage.render());
    },
    "/news/:id": (value) => {
      console.log(value.data.id);
      print(DetailNewsPage.render(value.data.id));
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