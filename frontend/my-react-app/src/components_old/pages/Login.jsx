import  Input  from "../Input";

function Login (){
    return <div className = "header">
        <div>
        <Input className = "inputCss" placeholder = "User Name"/>
        </div>
        <div>
        <Input className = "inputCss" placeholder = "Password"/>
        </div>
    </div>
}

export default Login;