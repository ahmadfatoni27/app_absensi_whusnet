import React from 'react';

function Card(props) {
  let R = props.recordMaterial;
  console.log(R.title);
    return (

      <div class="container">
        <div class="row">
          <div class="col order-last">
            First in DOM, ordered last
          </div>
          <div class="col">
            Second in DOM, unordered
          </div>
          <div class="col order-first">
            Third in DOM, ordered first
          </div>
        </div>
      </div>

    )
}
export default Card
