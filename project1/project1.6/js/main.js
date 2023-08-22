var data ={
    Response:[
{id:1,title:'Y', content:'2018-2022', Image:'img2/tesla1.jpg',Text:'text-1'},
{id:2,title:'X', content:'2018-2022', Image:'img2/tesla2.jpg',Text:'text-2'},
{id:3,title:'Model 3', content:'2018-2022', Image:'img2/tesla3.jpg',Text:'text-3'},
{id:4,title:'S', content:'2018-2022', Image:'img2/tesla4.jpg',Text:'text-4'},
{id:5,title:'tesla', content:'2018-2022', Image:'img2/tesla5.jpg',Text:'text-5'},
{id:6,title:'tesla', content:'2018-2022', Image:'img2/tesla6.jpg',Text:'text-6'},
        
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
          <button class="btn btn-outline-dark" type="button">اجاره خودرو</button>
          <button class="btn btn-outline-dark" type="button">مشخصات خودرو</button>
        </div>
      </div>
    </div>
  </div>
  </div>`

})