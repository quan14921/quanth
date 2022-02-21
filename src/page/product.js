import footer from "../components/footer";
import header2 from "../components/header2";
import  News from "../components/news";

const ProductPage = {
  async render() {
    return /* html */`
       ${header2.render()}
       <div class="p-3">
           ${ await News.render()}
       </div>
       ${footer.render()}
   `;
},
afterRender(){
  header2.afterRender();
}
};
export default ProductPage;