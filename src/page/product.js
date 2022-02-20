import footer from "../components/footer";
import header from "../components/header";
import News from "../components/news";

const ProductPage = {
  async render() {
    return /* html */`
       ${header.render()}
       <div class="p-3">
           ${ await News.render()}
       </div>
       ${footer.render()}
   `;
},
};
export default ProductPage;