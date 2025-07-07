import { useState } from "react";
import Input from "./Input"; 
import * as yup from "yup";
import axios from "axios"
const schema = yup.object().shape({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل اجباری است"), 
  password: yup.string().min(4, "پسورد نباید کمتر از ۴ کاراکتر باشد").required("پسورد اجباری است"), 
});

const Login = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]); 
  const [sending,setSending] = useState(false)

  async function validate() {
    try {
      const result = await schema.validate(account, { abortEarly: false })
      setErrors([])
      return result
    } catch (error) {
      {/*console.log(error.errors);*/}
      setErrors(error.errors)
      {/* const validationErrors = {}
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message
      })
      setErrors(validationErrors) */}
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fakeToken = "FAKE_AUTH_TOKEN_FOR_TESTING_12345";
    const result = await validate()
    {/*console.log(result)*/}
    if (result) {
      try {
        setSending(true)
        const response = await axios.post("http://localhost:8000/login", result)
        {/*console.log(response);*/}
        const receivedToken = response.data.token
        localStorage.setItem("token", receivedToken)
        setSending(false)
        localStorage.setItem("token", fakeToken );
      } catch (error) {
        setSending(false)
        setErrors(["پسورد یا ایمیل صحیح نمیباشد"])
      }
    }
  }
  const handleChange = ({ currentTarget: input }) => { 
    const newAccount = { ...account };
    newAccount[input.name] = input.value;
    setAccount(newAccount);
    {/*console.log(newAccount);*/}
  };

  return (
    <>{
        errors.length !== 0 &&(
            <div className="alert alert-danger">
                <ul>
                    {
                        errors.map((e,i) =>(
                            <li key={i}>{e}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    <form onSubmit={handleSubmit} >
      <h1 className="">Login Page</h1> 
      <Input
        onChange={handleChange}
        value={account.email}
        name="email"
        label="Email:"
        type="email" 
      />
      <Input
        onChange={handleChange}
        value={account.password}
        name="password"
        label="Password:"
        type="password" 
      />
      <button  
      type="submit" 
      className="btn btn-primary"
      disabled={sending}
      >
        Login
      </button>
    </form>
    </>
  );
};

export default Login;