var data ={
    Response:[
{id:1,title:'AMG GT',content:'2018-2023',Image:'img2/AMG GT.jpg'},
{id:2,title:'Class A',content:'2018-2023',Image:'img2/Class A.jpg'},
{id:3,title:'Class B',content:'2018-2023',Image:'img2/Class B.jpg'},
{id:4,title:'Class C',content:'2018-2023',Image:'img2/Class C.jpg'},
{id:5,title:'Class CL',content:'2018-2023',Image:'img2/Class CL.jpg'},
{id:6,title:'Class CLA',content:'2018-2023',Image:'img2/Class CLA.jpg'},
{id:7,title:'Class CLS',content:'2018-2023',Image:'img2/Class CLS.jpg'},
{id:8,title:'Class E',content:'2018-2023',Image:'img2/Class E.jpg'},
{id:9,title:'Class G',content:'2018-2023',Image:'img2/Class G.jpg'},
{id:10,title:'Class GLA',content:'2018-2023',Image:'img2/Class GLA.jpg'},
{id:11,title:'Class GLC',content:'2018-2023',Image:'img2/Class GLC.jpg'},
{id:12,title:'Class GLK',content:'2018-2023',Image:'img2/Class GLK.jpg'},
{id:13,title:'Class GLS',content:'2018-2023',Image:'img2/Class GLS.jpg'},
{id:14,title:'Class ML',content:'2018-2023',Image:'img2/Class ML.jpg'},
{id:15,title:'Class S-Coupe',content:'2018-2023',Image:'img2/Class S-Coupe.jpg'},
{id:16,title:'Class S',content:'2018-2023',Image:'img2/Class S.jpg'},
{id:17,title:'Class SL',content:'2018-2023',Image:'img2/Class SL.jpg'},
{id:18,title:'Class SLK',content:'2018-2023',Image:'img2/Class SLK.jpg'},
{id:19,title:'SLR',content:'2018-2023',Image:'img2/SLR.jpg'},
{id:20,title:'SLS AMG',content:'2018-2023',Image:'img2/SLS AMG.jpg'},        
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