import data from "../data";

const News = {
    render() {
        return /* html */`
        <h1 class="font-extrabold m-2 text-2xl truncate">TIN TỨC HỌC TẬP</h1>
        <div class="news">
            <div class="grid grid-cols-3 grid-flow-row gap-2">
                    ${data.map((post) => `
                            <div class="border-black border-2 p-6">
                                        <a href="/news/${post.id}">
                                        <div class="bg-center bg-no-repeat m-4 h-48 w-66" style="background-image: url('${post.img}'); background-size: 20rem 16rem"></div>
                                        </a>
                                    <h3 class="text-xl"><a href="/news/${post.id}">${post.title}</a></h3>
                                    <p class="text-sm">${post.desc}</p>
                                </div>
                        `).join("")}
            </div>
        </div>`;
    },
};
export default News;
