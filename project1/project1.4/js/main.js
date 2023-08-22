var data ={
    Response :[
        {id:1,title:'C-hr',content:'2018-2023',image:'img1/c-hr.jpg',Text:'Text-1'},
        {id:2,title:'Gt86',content:'2018-2023',image:'img1/Gt86.jpg',Text:'Text-2'},
        {id:3,title:'Arion',content:'2018-2023',image:'img1/اریون.jpg',Text:'Text-3'},
        {id:4,title:'Fg cruz',content:'2018-2023',image:'img1/اف جی کروز.jpg',Text:'Text-4'},
        {id:5,title:'Prado',content:'2018-2023',image:'img1/پرادو.jpg',Text:'Text-5'},
        {id:6,title:'Prius',content:'2018-2023',image:'img1/پریوس.jpg',Text:'Text-6'},
        {id:7,title:'Raufor',content:'2018-2023',image:'img1/راوفور.jpg',Text:'Text-7'},
        {id:8,title:'Fortuner',content:'2018-2023',image:'img1/فورچونر.jpg',Text:'Text-8'},
        {id:9,title:'Corolla',content:'2018-2023',image:'img1/کرولا.jpg',Text:'Text-9'},
        {id:10,title:'Camry',content:'2018-2023',image:'img1/کمری.jpg',Text:'Text-10'},
        {id:11,title:'Land Cruiser',content:'2018-2023',image:'img1/لندکروز.jpg',Text:'Text-11'},
        {id:12,title:'Hayes',content:'2018-2023',image:'img1/هایس.jpg',Text:'Text-12'},
        {id:13,title:'Hilux',content:'2018-2023',image:'img1/هایلوکس.jpg',Text:'Text-13'},
        {id:14,title:'Yaris',content:'2018-2023',image:'img1/یاریس.jpg',Text:'Text-14'},



    ]
}
data.Response.forEach((item,indx)=>{
    document.querySelector('.res').innerHTML +=`
    <div class="col-12 ">
    <div class="card mb-3">
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
})