var data ={
    Response:[
{id:1,title:'Bitel',content:'2018-2023',Image:'img2/bitel.jpg',Text:'text-1'},
{id:1,title:'Gool',content:'2018-2023',Image:'img2/gol.jpg',Text:'text-1'},        
{id:1,title:'Golf',content:'2018-2023',Image:'img2/golf.jpg',Text:'text-1'},
{id:1,title:'Passat',content:'2018-2023',Image:'img2/pasat.jpg',Text:'text-1'},
{id:1,title:'Tiguan',content:'2018-2023',Image:'img2/tegvan.jpg',Text:'text-1'},
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