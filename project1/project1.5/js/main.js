var data ={
    Response:[
        {id:'1',title:'Bronco-Sport',content:'2018-2022',image:'img2/Ford_Bronco_Sport.jpg',text:'text-1'},
        {id:'2',title:'Bronco',content:'2018-2022',image:'img2/Ford_Bronco.jpg',text:'text-2'},
        {id:'3',title:'Edge',content:'2018-2022',image:'img2/Ford_Edge.jpg',text:'text-3'},
        {id:'4',title:'Equator',content:'2018-2022',image:'img2/Ford_Equator.jpg',text:'text-4'},
        {id:'5',title:'Escort',content:'2018-2022',image:'img2/Ford_Escort.jpg',text:'text-5'},
        {id:'6',title:'Everest',content:'2018-2022',image:'img2/Ford_Everest.jpg',text:'text-6'},
        {id:'7',title:'Evos',content:'2018-2022',image:'img2/Ford_Evos.jpg',text:'text-7'},
        {id:'8',title:'F-250',content:'2018-2022',image:'img2/Ford_F-250.jpg',text:'text-8'},
        {id:'9',title:'F',content:'2018-2022',image:'img2/Ford_F.jpg',text:'text-9'},
        {id:'10',title:'Focus-sedan',content:'2018-2022',image:'img2/Ford_Focus_sedan.jpg',text:'text-10'},
        {id:'11',title:'Focus',content:'2018-2022',image:'img2/Ford_Focus.jpg',text:'text-11'},
        {id:'12',title:'Maverick',content:'2018-2022',image:'img2/Ford_Maverick.jpg',text:'text-12'},
        {id:'13',title:'Mondeo',content:'2018-2022',image:'img2/Ford_Mondeo.jpg',text:'text-13'},
        {id:'14',title:'Mustang',content:'2018-2022',image:'img2/Ford_Mustang.jpg',text:'text-14'},
        {id:'15',title:'Puma',content:'2018-2022',image:'img2/Ford_Puma.jpg',text:'text-15'},
        {id:'16',title:'Ranger',content:'2018-2022',image:'img2/Ford_Ranger.jpg',text:'text-16'},
        {id:'17',title:'Tourneo',content:'2018-2022',image:'img2/Ford_Tourneo_Courier.jpg',text:'text-17'},
        {id:'18',title:'Taurus',content:'2018-2022',image:'img2/Ford_Taurus.jpg',text:'text-18'},
        {id:'19',title:'Transit-Courier',content:'2018-2022',image:'img2/Ford_Transit_Courier.jpg',text:'text-19'},
        {id:'20',title:'Transit',content:'2018-2022',image:'img2/Ford_Transit.jpg',text:'text-20'},

    ]
};
data.Response.forEach((item,indx)=>{
    document.querySelector('.res').innerHTML +=`
    <div class="col-12 mt-5">
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
