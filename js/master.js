$('.container-a-section').cxSelect({
selects: ['province',  'city','hospital', 'project'],
jsonName: 'n',
required: false,
jsonValue: 'value',
jsonSub: 's',
data: [
{n:'内蒙古', value: '1', s: [
  {n: '呼和浩特市', value: '11', s: [
    {n: '内蒙古医院', value: '110', s: [
      {n: '外科', value: '1101'},
      {n: '内科', value: '1102'}
    ]},
    {n: '内蒙古附属医院', value: '111', s: [
      {n: '骨科', value: '1111'},
      {n: '内分泌科', value: '1112'}
    ]},
    {n: '内蒙古医院', value: '112', s: [
      {n: '外科', value: '1121'},
      {n: '中医科', value: '1122'}
    ]}
  ]},
  {n: '包头市', value: '12', s: [
    {n: '包头第一医院', value: '120', s: [
      {n: '外科', value: '1201'},
      {n: '内科', vlaue: '1202'}
    ]}
  ]}
]},
{n:'北京', value: '2', s: [
  {n: '东城区', value: '20', s: [
    {n: '北京人民医院', value: '201', s: [
      {n: '外科', value: '2011'},
      {n: '内科', value: '2012'}
    ]}
  ]}
]}
]
});

$('.container-b-section').cxSelect({
selects: ['hospital', 'project', 'doctor'],
jsonName: 'n',
required: false,
jsonValue: 'value',
jsonSub: 's',
data: [
{n:'内蒙古', value: 'nm', s: [
  {n: '中医', value: 'dc', s: [
    {n: '黎明', value: '111'},
    {n: '郭大师', value: '112'},
    {n: '范远', value: '113'}
  ]},
  {n: '蒙医', value: 'dm', s: [
    {n: '阿南达', value: 'dm1'},
    {n: '阿南达', value: 'dm2'},
    {n: '阿南达', value: 'dm3'}
  ]}
]},
{n:'北京', value: 'bj', s: [
  {n: '中医', value: 'dc', s: [
    {n: '黎明', value: '111'},
    {n: '郭大师', value: '112'},
    {n: '范远', value: '113'}
  ]},
  {n: '蒙医', value: 'dm', s: [
    {n: '阿南达', value: 'dm1'},
    {n: '阿南达', value: 'dm2'},
    {n: '阿南达', value: 'dm3'}
  ]}
]},

]
});
$(function(){

  function gain_val_a(){
    var  province_a = $('.container-a-section .province')[0].value;
    var  city_a = $('.container-a-section .city')[0].value;
    var  hospital_a = $('.container-a-section .hospital')[0].value;
    var  project_a = $('.container-a-section .project')[0].value;
    if (+province_a === 0) {
      alert('请选择地区');
      return;
    } else if (+city_a === 0) {
      alert('请选择城市');
    } else if (+hospital_a === 0) {
      alert('请选择医院');
    } else if (+project_a === 0) {
      console.log(province_a, city_a, hospital_a);
      window.location = 'hospital.html';
    } else {
      console.log(province_a, city_a, hospital_a, project_a)
      window.location = 'doctor.html';
    }
  }

  function gain_val_b(){
    var  hospital_b = $('.container-b-section .hospital')[0].value;
    var  project_b = $('.container-b-section .project')[0].value;
    if (+hospital_b === 0) {
      alert('请选择地区');
      return false;
    } else if (+project_b === 0) {
      alert('fd')
      alert('请选择医生');
    } else {
      console.log(hospital_b, project_b)
      window.location = 'doctor.html';
    }
  }

  var button_a = $('.container-a-section .buttons-button')[0];
  var button_b = $('.container-b-section .buttons-button')[0];
  button_a.onclick = function() {
    gain_val_a();
  }
  button_b.onclick = function() {
    gain_val_b();
  }
})


$(function(){
  // gallery options
  $('.gallery-slide-wrapper').slick({
    dots: true,
    autoplay: true,
    arrows: false
  });

  // tabs options
  var sections = $('.order-model');
  var buttons = $('.menu-filter-button');
  var search = $('.order-menu-button');

  function toggle(){
    Array.prototype.slice.call(sections).forEach(function(i){i.classList.remove('model-active')});
    Array.prototype.slice.call(buttons).forEach(function(i){i.classList.remove('menu-filter-buttonactive')});
    Array.prototype.slice.call(search).forEach(function(i){i.classList.remove('model-active')});
  }
  buttons[0].onclick = function(){
    toggle();
    this.classList.add('menu-filter-buttonactive');
    sections[0].classList.add('model-active');
    search[0].classList.add('model-active');
  };

  buttons[1].onclick = function(){
    toggle();
    this.classList.add('menu-filter-buttonactive');
    sections[1].classList.add('model-active');
    search[1].classList.add('model-active');
  }

    // function scrollbar() {
    // var windowWidth = $(window).width();
    // if (windowWidth > 640) {
    //   Scrollbar.initAll();
    // }
    // }
    // scrollbar()
    // smoothScroll.init();
})
