import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
            <div class="banner">
            <div class="bg-center bg-no-repeat h-80 w-120" style="background-image: url('https://lh5.googleusercontent.com/-_xgJsWdyra8/VRjyAvFyIwI/AAAAAAAAMpg/cGPCV0caiQY/w1038-h331-no/Banner%2BWeb%2Bcuoc%2Bthi%2BAnh%2BKhoanhkhactuoi17%2B2.jpg'); background-size: 100rem 20rem"></div>
            </div>
            <div class="p-3">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;