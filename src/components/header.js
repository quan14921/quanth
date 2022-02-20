

const header = {
    render() {
        return /* html */`
        <!-- menu -->
        <div class="header">
        <div class="container">
            <div class="navbar ">
                <nav class="p-2 flex flex-wrap">
                <div class="logo">
                <a href="/"><img src="../img/logo-white.png" width="150px"></a>
                </div>
                <ul class="p-2 flex flex-wrap content-center absolute right-5">
                <li class="text-lg py-2 px-4"><a class="p-2" href="/">trang chủ</a></li>
                <li class="text-lg py-2 px-4"><a class="p-2" href="/product">Sản Phẩm</a></li>
                <li class="text-lg py-2 px-4"><a class="p-2" href="/product">Giỏ Hàng</a></li>
                <li class="text-lg py-2 px-4"><a class="p-2" href="/signin">đăng nhập</a></li>
              </ul>
              <div>
                    <span id="account" class="text-white"></span>
                    ${localStorage.getItem('user') ? '<button id="logout">Logout</button>' : ""}
                </div>
                </nav>
            </div>
            <div class="row">
                <div class="col-2">
                    <h1>Give Your Workout<br> A New Style!</h1>
                    <p>Success ins't always about greatness. It's about
                        consistency. Consistent <br>hard work gains success. Greatness
                        will come. </p>
                    <a href="" class="btn">MUA NGAY &#8594;</a>
                </div>
                <div class="col-2">
                    <img src="../img/image1.png">
                </div>
            </div>
        </div>
    </div>
        `;
    },
};
export default header;