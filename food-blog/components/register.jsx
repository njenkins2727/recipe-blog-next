import React from 'react'

const Register = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1711645372528-cddb2c6eb565?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
      <div className="hero-overlay bg-opacity-60"></div>

    <div className="form flex h-screen items-center justify-center">
      <form action="sign-up">
        <div className="card w-96 bg-base-100 shadow-xl border border-primary">
          <div className="card-body">
            <h1 className='card-title'>Registration</h1>
            Fill out the feilds below to complete sign-up

            <label className="input input-bordered  flex items-center gap-2 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input type="text" className="grow text-white" placeholder="Username"  />
            </label>

            <label className="input input-bordered  flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow text-white" placeholder="Email"/>
            </label>
                
            <label className="input input-bordered  flex items-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow " placeholder='Password' />
            </label>

            <div className="card-actions justify-end mt-2">
              <button className="btn bg-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

// <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
//   <div className="hero-overlay bg-opacity-60"></div>

//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-md">
//       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//       <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
    
  )
}

export default Register