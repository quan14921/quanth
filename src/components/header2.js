import { reRender } from "../utils/rerender";

const header2 = {
    render() {
        return /* html */`
        <!-- menu -->
        <div class="bg-orange-200">
        <div class="navbar">
            <div class="logo">
            <a href="/"><img src="../img/logo-white.png" width="150px"></a>
            </div>
            <nav>
            <ul class="MenuItems">
            <li class="text-lg py-2 px-4"><a class="p-2" href="/">trang chủ</a></li>
            <li class="text-lg py-2 px-4"><a class="p-2" href="/product">Sản Phẩm</a></li>
            <li class="text-lg py-2 px-4"><a class="p-2" href="/cart">Giỏ Hàng</a></li>
            <li class="text-lg py-2 px-4"><a class="p-2" href="/signin">đăng nhập</a></li>
          </ul>
          <div class="absolute right-5">
              <span id="account" class="text-black"></span>
              ${localStorage.getItem('user') ? '<button id="logout">Logout</button>' : ""}
                </div>
            </nav>
        </div>
    </div>
        `;
    },
    afterRender(){
        const account = document.querySelector('#account');
        const btnLogout = document.querySelector('#logout');
        account.innerHTML = JSON.parse(localStorage.getItem('user')).username;

        btnLogout.addEventListener('click', function(){
           localStorage.removeItem('user');
           alert('Ban da logout thanh cong');
           document.location.href="/";
        })
    }
};
export default header2;