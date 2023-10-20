$(document).ready(function(){
    $('.btn_bar').click(function(){
        const popup = ' <div class="popup"></div>';
        $('.box-slide-bar').css({'left':'0'});
        $('body').append(popup);
   })
   $('body').on('click','.popup',function(){
        $(this).parents('body').find('.popup').hide();
        $(this).parents('body').find('.box-slide-bar').css({'left':'-400px'})
   })
 



   const slide = $('.slide');
   const numSlide = slide.length;
   console.log(numSlide)
   slide.hide()
   let i = 0;
   slide.eq(i).show();
   setInterval(function(){   
        slide.eq(i).hide()
        i++;
        if(i >= numSlide){
             i=0;
        }
        slide.eq(i).show()
   },2500)

   $('.next').click(function(){
        slide.eq(i).hide()
        i++;
        if(i >= numSlide){
             i=0;
        }
        slide.eq(i).show()
   })
   $('.back').click(function(){
        slide.eq(i).hide()
        if(i == 0){
             i = numSlide;
        }
        i--;
        slide.eq(i).show()
   })
   

})
const product=[{
     title: 'Running shoes',
     model: 'Air Prox3 blue',
     price:'58.80$',
     img:'s1.jpeg'
},
{
     title: 'Running shoes',
     model: 'Air Prox3 black',
     price:'58.80$',
     img:'s2.jpeg'

},
{
     title: 'Running shoes',
     model: 'Air Prox3 orange',
     price:'58.80$',
     img:'s3.jpeg'

},
{
     title: 'Running shoes',
     model: 'Air Prox3 blue',
     price:'58.80$',
     img:'s4.jpeg'
},
{
     title: 'Running shoes',
     model: 'Air Prox3 blue',
     price:'58.80$',
     img:'s5.jpeg'
},
{
     title: 'Running shoes',
     model: 'Air Prox3 blue',
     price:'58.80$',
     img:'s6.jpeg'
},
{
     title: 'Running shoes',
     model: 'Air Prox3 blue',
     price:'58.80$',
     img:'s7.jpeg'
},
{
     title: 'Running shoes',
     model: 'Air Prox3 blue',
     price:'58.80$',
     img:'s8.jpeg'
},

];
let res='';
product.map((e)=>{
     res+=`
     <div class="cards">
        <div class="image">
            <img src="${e.img}" alt="">
        </div>
        <div class="bo">
            <div class="title">${e.title}</div>
            <div class="model">${e.model}</div>
            <div class="price">${e.price}</div>
        </div>
    </div> 
     
     `;
})
document.getElementsByClassName('product')[0].innerHTML=res;



