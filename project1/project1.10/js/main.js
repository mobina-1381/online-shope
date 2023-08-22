var data ={
    Response:[
{id:1,title:'I8',content:'2018-2023',image:'img2/i8.jpg',},      
{id:2,title:'Sri1',content:'2018-2023',image:'img2/sri1.jpg',},        
{id:3,title:'Sri2',content:'2018-2023',image:'img2/sri2.jpg',},
{id:4,title:'Sri3',content:'2018-2023',image:'img2/sri3.jpg',},
{id:5,title:'Sri4',content:'2018-2023',image:'img2/sri4.jpg',},
{id:6,title:'Sri5',content:'2018-2023',image:'img2/sri5.jpg',},
{id:7,title:'Sri6',content:'2018-2023',image:'img2/sri6.jpg',},
{id:8,title:'Sri7',content:'2018-2023',image:'img2/sri7.jpg',},
{id:9,title:'X1',content:'2018-2023',image:'img2/X1.jpg',},
{id:10,title:'X3',content:'2018-2023',image:'img2/X3.jpg',},
{id:11,title:'X4',content:'2018-2023',image:'img2/X4.jpg',},
{id:12,title:'X5',content:'2018-2023',image:'img2/X5.jpg',},
{id:13,title:'X6',content:'2018-2023',image:'img2/X6.jpg',},
{id:14,title:'Z4',content:'2018-2023',image:'img2/Z4.jpg',},        
    ]
};

data.Response.forEach((item,indx)=>{
    document.querySelector('.res').innerHTML +=`
    <div class="col-12 mt-5">
    <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.image}" class="img-fluid rounded-start px-5">
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

});