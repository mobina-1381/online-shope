var data ={
    Response:[
{id:1,title:'H1',content:'2018-2023',Image:'img2/H1.jpg'},        
{id:2,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 1.jpg',},
{id:3,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 2.webp',},
{id:4,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 3.jpg',},
{id:5,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 4.webp',},
{id:6,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 5.jpg',},
{id:7,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 6.jpg',},
{id:8,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 7.jpg',},
{id:9,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 8.jpg',},
{id:10,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 9.jpg',},
{id:11,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 10.jpg',},
{id:12,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 11.webp',},
{id:13,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 12.jpg',},
{id:14,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 13.webp',},
{id:15,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 14.jpg',},
{id:16,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 15.jpg',},
{id:17,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 16.jpg',},
{id:18,title:'Hyundai',content:'2018-2023',Image:'img2/Hyundai 17.jpg',},        
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