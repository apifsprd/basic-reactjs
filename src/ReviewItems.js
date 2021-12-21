import './App.css';
import React from 'react'; 

function ReviewItems(){
    // Data dummy
    const user = [
      {
        "id": 1,
        "name": "Imansyah Muhamad Putera",
        "username": "imansyah",
        "review": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century ",
        "image": "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 2,
        "name": "Ari Eka Prasetya",
        "username": "arieka",
        "review": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century ",
        "image": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 3,
        "name": "Nugraha Yustan",
        "username": "nugraha",
        "review": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century ",
        "image": "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 4,
        "name": "Hadis",
        "username": "hadis",
        "review": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century ",
        "image": "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
      {
        "id": 5,
        "name": "Dwi Oktavianto",
        "username": "dwiktvt",
        "review": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century ",
        "image": "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      },
    ];
    const listReviews = user.map((itemReiew) => 
    <div key={itemReiew.id} className='Item'>
    <img src={itemReiew.image}/>
    <div className='User'>
      <h3>{itemReiew.name} <span>@{itemReiew.username}</span></h3>
      <p>{itemReiew.review}</p>
    </div>
    </div>
    );
    return (
      <div className='Reviewbox'>
        <h2>Reviews</h2>
        {listReviews}
      </div>
    )
  }

  
  export default ReviewItems;