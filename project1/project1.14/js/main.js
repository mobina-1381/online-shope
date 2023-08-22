var data ={
    Response:[
{id:1,title:'EV6',content:'2022-2023',Image:'img2/kia_EV6.jpg',},
{id:2,title:'cerato',content:'2018-2023',Image:'img2/cerato.jpg',},
{id:3,title:'Picanto',content:'2018-2023',Image:'img2/kia3.jpg',},
{id:4,title:'Optima',content:'2018-2023',Image:'img2/kia4.jpg',},
{id:5,title:'Sportage-2015',content:'2015-2018',Image:'img2/kia5.jpg',},
{id:6,title:'Sorento',content:'2018-2023',Image:'img2/kia6.jpg',},
{id:7,title:'cerato-2023',content:'2018-2023',Image:'img2/kia7.jpg',},
{id:8,title:'sportage-2018',content:'2018-2023',Image:'img2/kia8.jpg',},        
    ]
};

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
          <button class="btn btn-outline-dark mt-5" type="button">اجاره خودرو</button>
          <button class="btn btn-outline-dark mt-5" type="button">مشخصات خودرو</button>
        </div>
      </div>
    </div>
  </div>
  </div>`

})