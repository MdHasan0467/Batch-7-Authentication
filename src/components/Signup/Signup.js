import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

     const {createSignUp, userprofile} = useContext(AuthContext);

const navigate = useNavigate()


     const handleSignup = (e) => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.img.value;


        console.log(name, email, password, photoURL);






        createSignUp(email, password)
        .then(result => {
            const user = result.user;
            console.log('user', user);

            if(result){
                navigate('/');
            }

            userUpdateDetails(name, photoURL);

        })
        .catch(err => console.error(err));
        

        
     }






    const userUpdateDetails = (name, photoURL) => {
        userprofile(name, photoURL)
        .then(() => {
            alert('Updated user profile')
          }).catch((error) => {
            console.error(error)
          });

    }






    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



            <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                </div>


                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                </div>


                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input name='img' type="text" placeholder="PhotoURL" className="input input-bordered" />
                </div>




                <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
                </div>
            </form>




            </div>
            </div>
        </div>
    );
};

export default Signup;