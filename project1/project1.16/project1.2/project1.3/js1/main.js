var data={
    Response:[
        {id:1,title:'Audi A8 L 2022',content:'$81.1/روز',Image:'img/car1.svg',},
        {id:2,title:'Nissan Maxima platinum 2022',content:'$81.1/روز',Image:'img/car2.svg'},
        {id:3,title:'porsche cayenne GTS 2022',content:'$81.1/روز',Image:'img/car3.svg'},
        {id:4,title:'BMW M8 Coupe 2022',content:'$81.1/روز',Image:'img/car4.svg'},
        {id:5,title:'BMW X7 M50i 2022',content:'$81.1/روز',Image:'img/car5.svg'},
        {id:6,title:'porsche Cayenne GTS 2023',content:'$81.1/روز',Image:'img/car6.svg'},
    
    ]
};
data.Response.forEach((item,indx)=>{
    document.querySelector('.res').innerHTML += `
<div class="col-lg-4 mt-lg-4 mb-3">
<div class="card" style="width: 18rem;">
  <img src="${item.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.content}</p>
    <a href="#" class="btn btn-outline-dark">توضیحات بیشتر</a>
    <a href="#" class="btn btn-outline-dark">اجاره اتومبیل</a>
  </div>
</div>
</div>`;
})










