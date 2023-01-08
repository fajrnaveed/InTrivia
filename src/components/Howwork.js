import React from 'react'
import "../../src/index.css"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Howwork = () => (


    <section className='section-third' id='section-third'>
            <h2>How it Works</h2>
           
        <div className='section-third-task'>
            <div className="task-1">
                <img src={icon1} alt="img"/>
                <h3>Enter amount for committee</h3>
                <p>Users will enter their desired amount to
                participate in the committee and admin will hold
                all the collected amount

                </p>
               
            </div>

            <div className='task-2'>
                <img src={icon2} alt="img"/>
                <h3>Admin Holds the committee</h3>
                <p>Admin holds the committee
                    for specific amount of time
                    and make sure that the amount is complete.
                </p>
                
            </div>

            <div className='task-3'>
                <img src={icon3} alt="img"/>
                <h3>Redeem your committee</h3>
                <p>After specific time lets say a month , admin selects a 
                    random user based on the lucky draw and
                    then the users gets the whole amount.
                </p>
            </div>
        </div>

    </section>

    
);

export default Howwork;