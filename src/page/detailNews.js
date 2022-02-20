import axios from "axios";
import { get } from "../api/post";
import footer from "../components/footer";
import header from "../components/header";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        ${header.render()}
        <div class="small-container single-product">
        <div class="row">
            <div class="col-2">
                <img src="${data.img}">
            </div>
            <div class="col-2">
                <p>Home / T-Shirt</p>
                <h1>${data.title}</h1>
                <h4>50.000d</h4>
                    <input type="number" value="1">
                    <a href="" class="btn">Mua ngay</a>
                    <h3>Product Detail</h3>
                    <br>
                    <p>${data.desc}</p>
            </div>
        </div>
    </div>
            ${footer.render()}
        `
    },
};
export default DetailNewsPage;
