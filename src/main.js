import Navigo from "navigo";
import HomePage from "./page/home";
import ProductPage from "./page/product";
import DetailNewsPage from "./page/detailNews";
import dashboardPage from "./admin/dashboard";
import signinPage from "./page/signin";
import signupPage from "./page/signup";
import AdminnewsPage from "./admin/news/indexx";
import addnewsPage from "./admin/news/add";
import AdminEditNews from "./admin/news/edit";
import AdminuserPage from "./admin/category/indexx";
import CartPage from "./page/cart";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("cont").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/admin/dashboard": () => {
      print(dashboardPage);
    },
    "/product": () => {
      print(ProductPage);
    },
    "/admin/news": () => {
      print(AdminnewsPage);
    },
    "/admin/category": () => {
      print(AdminuserPage);
    },
    "/admin/news/add": () => {
      print(addnewsPage);
    },
    "/admin/news/:id/edit": ({data}) => print(AdminEditNews, data.id),
    "/signin": () => {
      print(signinPage);
    },
    "/signup": () => {
      print(signupPage);
    },
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    "/cart": () => print(CartPage),

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