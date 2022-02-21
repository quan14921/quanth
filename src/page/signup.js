import { signup } from "../api/user";
import footer from "../components/footer";
import header2 from "../components/header2";

const signupPage = {
    render(){
        return /*html*/`
        ${header2.render()}
        <div class="account-page">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <img src="img/image1.png" width="100%">
                </div>

                <div class="col-2">
                    <div class="form-container">
                        <h3>Đăng Kí</h3>
                        <form id="formSignup">
                            <input type="text" placeholder="username" id="username">
                            <input type="email" placeholder="Email" id="email">
                            <input type="password" placeholder="Password" id="password">
                            <button type="submit" class="btn">Đăng Kí</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div> 
    ${footer.render()}
        `
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: document.querySelector('#username').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                console.log(response);
                document.location.href="/signin";

            } catch (error) {
                console.log(error.response.data);
            }
        });
        header2.afterRender();
    }
}
export default signupPage;




