import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
            <h1>result.title</h1>
            <img src="${result.img}" />
            <div>${result.desc}</div>
        `;
    },
};
export default DetailNewsPage;