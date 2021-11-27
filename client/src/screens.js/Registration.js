import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registration extends Component {
   render() {
      const month = [
         'January',
         'Febuary',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December',
      ];

      for (let i = 0; i <= 31; i++) {
         const days = i;
         console.log(days);
      }
      return (
         <div className="auth">
            <div className="intro">
               <h1>facebook</h1>
               <h4>
                  Facebook helps you connect and share with the people in your
                  life.
               </h4>
            </div>
            <form className="form">
               <div>
                  <input
                     type="text"
                     placeholder="First name"
                     name="firstName"
                  />
               </div>
               <div>
                  <input type="text" placeholder="Surname" name="surName" />
               </div>
               <div>
                  <input
                     type="email"
                     placeholder="Email Address"
                     name="email"
                  />
               </div>
               <div>
                  <input type="text" placeholder="Mobile Number" name="phone" />
               </div>
               <div>
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                  />
               </div>
               <div className="dob">
                  <small>Date of Birth</small>
                  <div className="box">
                     <div className="select">
                        {1 + 1}
                        <select></select>
                        <i className="fas fa-caret-down"></i>
                     </div>
                  </div>
                  <div className="box">
                     <div className="select">
                        <select>
                           {month.map((x) => (
                              <option key={x} value={x}>
                                 {x}
                              </option>
                           ))}
                        </select>
                        <i className="fas fa-caret-down"></i>
                     </div>
                  </div>
               </div>
               <div>
                  <button className="btn btn-primary">Sign Up</button>
               </div>
               <div>
                  <small>
                     By clicking Sign Up, you agree to our Terms, Data Policy
                     and Cookie Policy. You may receive SMS notifications from
                     us and can opt out at any time.
                  </small>
               </div>

               <div className="line"></div>

               <Link to="/">
                  <button className="btn btn-success">Log In</button>
               </Link>
            </form>
         </div>
      );
   }
}

export default Registration;
