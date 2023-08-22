var data ={
    Response:[
{id:1,title:'Audi',content:'2018-2023',Image:'img2/Audi 1.jpg'},        
{id:2,title:'Audi',content:'2018-2023',Image:'img2/Audi 2.jpg'},
{id:3,title:'Audi',content:'2018-2023',Image:'img2/Audi 3.jpg'},
{id:4,title:'Audi',content:'2018-2023',Image:'img2/Audi 4.jpg'},
{id:5,title:'Audi',content:'2018-2023',Image:'img2/Audi 5.jpg'},
{id:6,title:'Audi',content:'2018-2023',Image:'img2/Audi 6.jpg'},
{id:7,title:'Audi',content:'2018-2023',Image:'img2/Audi 7.jpg'},        
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