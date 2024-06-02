import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    const [disable, setDisable] = useState(true)

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target

        const email = form.email.value
        const password = form.password.value
    }

    const captchaRef = useRef(null)

    const handleCaptcha = () =>{
        const value = captchaRef.current.value;
        console.log(value)

        if(validateCaptcha(value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                placeholder="Type the text above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button className='btn btn-outline btn-xs mt-2' onClick={handleCaptcha}>Check</button>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" disabled={disable}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
