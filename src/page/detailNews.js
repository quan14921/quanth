import axios from "axios";
import { get } from "../api/post";
import footer from "../components/footer";
import header2 from "../components/header2";
import { addToCart } from "../utils/cart";
import { $ } from "../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        ${header2.render()}
        <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src="${data.img}">
            </div>
            <div class="col-2">
                <p>Home / T-Shirt</p>
                <h1>${data.name}</h1>
                <h4>${data.price}d</h4>
                <input type="number" id="inputQty" class="border border-gray-400" value="1" />
                <button id="btnAddToCart" class="btn hover:bg-indigo-700">Add to cart</button>
                    <h3>Product Detail</h3>
                    <br>
                    <p>${data.desc}</p>
            </div>
        </div>
    </div>
            ${footer.render()}
        `
    },
    afterRender(id){
        $('#btnAddToCart').addEventListener('click', async function(){
            const { data } = await get(id);
            addToCart({...data, quantity: +$("#inputQty").value}, () => {
                toastr.success("Thêm thành công!");
            });
        })

        header2.afterRender();
    }
};
export default DetailNewsPage;
