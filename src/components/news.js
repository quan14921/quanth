import data from "../data";

const News = {
    render() {
        return /* html */`
        <h1 class="font-extrabold m-2 text-2xl truncate">TIN TỨC HỌC TẬP</h1>
        <div class="news">
            <div class="grid grid-cols-3 grid-flow-row gap-2">
                    ${data.map((post) => `
                            <div class="border-black border-2 p-6">
                                        <a href="">
                                        <div class="bg-center bg-no-repeat m-4 h-48 w-66" style="background-image: url('http://tpad.vn/Uploaded/Members/14245/images/2020/tin%20t%E1%BB%A9c%20t10/t11/truong%20-%20FPT-%20tham%20-%20quan-%20TPA/Sinh---vien--truong--PFT---tham---quan----TPA.png'); background-size: 20rem 16rem"></div>
                                        </a>
                                    <h3 class="text-xl">${post.title}</h3>
                                    <p class="text-sm">${post.desc}</p>
                                </div>
                        `).join("")}
            </div>
        </div>`;
    },
};
export default News;