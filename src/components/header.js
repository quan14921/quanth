

const header = {
    render() {
        return /* html */`
        <div class="bg-center bg-blue-900 bg-no-repeat h-40 w-120" style="background-image: url('https://vn-school.s3-ap-northeast-1.amazonaws.com/school/124/cao-dang-thuc-hanh-fpt-polytechnic-cs-1-0-hR33G5.jpg'); background-size: 20rem 6rem"></div>
      
        <!-- menu -->
        <div class="bg-orange-400 p-3">
          <ul class="p-2 flex">
            <li><a class="text-white p-2" href="/">trang chủ</a></li>
            <li><a class="text-white p-2" href="/product">Bài viết</a></li>
            <li><a class="text-white p-2" href="/signin">đăng nhập</a></li>
            <div class="absolute right-5">
              <input type="text">
              <input class="text-white bg-blue-900  border-2" type="submit" value="tìm kiếm">
            </div>
          </ul>
    
        </div>
        `;
    },
};
export default header;