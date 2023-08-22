var data ={
    Response:[
{id:1,title:'Honda',content:'2018-2023',Image:'img2/honda1.jpg',},
{id:2,title:'Honda',content:'2018-2023',Image:'img2/honda2.jpg',},
{id:3,title:'Honda',content:'2018-2023',Image:'img2/honda3.jpg',},
{id:4,title:'Honda',content:'2018-2023',Image:'img2/honda4.jpg',},
{id:5,title:'Honda',content:'2018-2023',Image:'img2/honda5.jpg',},
{id:6,title:'Honda',content:'2018-2023',Image:'img2/honda6.jpg',},

    ]
}



data.Response.forEach((item,indx)=>{
    document.querySelector('.res').innerHTML +=`
    <div class="col-12 mt-5">
    <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.Image}" class="img-fluid rounded-start px-5">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.content}</p>
          <button class="btn btn-outline-dark" type="button">اجاره خودرو</button>
          <button class="btn btn-outline-dark" type="button">مشخصات خودرو</button>
        </div>
      </div>
    </div>
  </div>
  </div>`

})