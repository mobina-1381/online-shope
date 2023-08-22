var data ={
    Response:[
{id:1,title:'Juke',content:'2018-2023',Image:'img2/Nissan_Juke.png'},      
{id:2,title:'Maxima',content:'2018-2023',Image:'img2/Nissan_Maxima-ir.png'},        
{id:3,title:'Murano',content:'2018-2023',Image:'img2/Nissan_Murano.png'},
{id:4,title:'Patrol-2',content:'2018-2023',Image:'img2/Nissan_Patrol_2_door.png'},
{id:5,title:'Patrol-4',content:'2018-2023',Image:'img2/Nissan_Patrol_4_door.png'},
{id:6,title:'Pickup',content:'2018-2023',Image:'img2/Nissan_Pickup.png'},
{id:7,title:'Qashqai',content:'2018-2023',Image:'img2/Nissan_Qashqai.png'},
{id:8,title:'Roniz',content:'2018-2023',Image:'img2/Nissan_Roniz.png'},
{id:9,title:'Teana-im',content:'2018-2023',Image:'img2/Nissan_Teana-im.png'},
{id:10,title:'Teana',content:'2018-2023',Image:'img2/Nissan_Teana-ir.png'},
{id:11,title:'X-Trail',content:'2018-2023',Image:'img2/Nissan_X-Trail.png'},


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