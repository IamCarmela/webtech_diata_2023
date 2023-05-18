import React from 'react';

const Likes = () => {
  return (
    <div>
      <div>
        <h1>Things I liked</h1>
        <div className='like'>
            <div>
                <p><b>Foods</b></p>
                <ol>
                    <li>Menudo</li>
                    <li>Gulay na Santol</li>
                    <li>Bicol Express</li>
                </ol>
            </div> 

            <div>
                <p><b>Things</b></p>
                <ol>
                    <li>Musical Instruments</li>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>House Decorators</li>
                </ol>
            </div> 

            <div>
                <p><b>Drinks</b></p>
                <ol>
                    <li>Coffee</li>
                    <li>Milktea</li>
                    <li>Fruit Juices</li>
                </ol>
            </div> 
        </div>
      </div>
    </div>
  )
};

export default Likes;
