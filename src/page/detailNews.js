import data from "../data";
import footer from "../components/footer";
import header from "../components/header";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
        ${header.render()}
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <div>${result.desc}</div>
            ${footer.render()}
        `;
    },
};
export default DetailNewsPage;