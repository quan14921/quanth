import style from "./news.module.css";
import axios from 'axios';
import { get } from "../api/category";
const product = {
    async render() {
        const { data } = await get()
        return /* html */`
        <div class="small-container">
        <h2 class="title text-4xl">Sản Phẩm Nổi Bật</h2>
            <div>
                <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="row row-2">
                        <h2>All Products</h2>
                        <select>
                        <option value="${post.posts.id}">${post.posts.name}</option>
                        </select>
                    </div>
                                    <div class="${style["news-item"]} border p-4">
                                        <div class="news-img">
                                            <a href="/news/${post.id}">
                                                <img src="${post.img}" />
                                            </a>
                                        </div>
                                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.name}</a></h3>
                                        <div class="w-64 m-2 truncate">
                                        <h3>${post.price}</h3>
                                        <span>${post.desc}</span>
                                        </div>
                                    </div>`).join("")}
                            
                </div> 
                </div>   
            </div>`;
    },
};
export default product;