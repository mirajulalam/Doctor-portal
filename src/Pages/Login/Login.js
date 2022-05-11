import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-center font-bold text-xl'>Login</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-accert text-white">Login</button>
                        </div>
                        <p>New to Doctor Portal? <Link className='text-primary' to='/login'>Create new account</Link></p>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                        </div>
                        <input className='btn border-1-black-100' type="submit" value="submit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;