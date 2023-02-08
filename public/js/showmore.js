

export default function ShowMore(ele){
    let showMore = document.querySelectorAll('.showMore');


    showMore.forEach((showmore,index)=>{
        let ismaxheightreduce = showmore.classList.contains('mx-h-3');
        let marginvalue = 0;
        if(showmore.classList.contains('forabout')){
            marginvalue = 70;
        }
        let isshowmore = isShowmore(showmore,ismaxheightreduce,marginvalue);

        
        if(isshowmore.result){
            // showMore.innerText 
            showmore.innerHTML += `<button class="showmore-btn"><span>...Show More</span></button>`;
            
        }

        let value = ismaxheightreduce && marginvalue  == 0 ? isshowmore.pValue-20 : !ismaxheightreduce && marginvalue != 0 ? isshowmore.pValue-marginvalue : isshowmore.pValue;
        showmore.querySelector('.showmore-btn').addEventListener('click',(e)=>{
            let spanEle = [...e.target.children];
            if(e.target.classList.contains('active')){
                showmore.style.maxHeight = `${value}px`;
                e.target.classList.remove('active');
                spanEle[0].innerHTML = '...Show More'
            }
            else{
                showmore.style.maxHeight = '100%';
                e.target.classList.add('active');
                spanEle[0].innerHTML = 'Show Less'
            }
        })

    })




}

function isShowmore(ele,ismaxheightreduce=false,marginvalue=0){
    let pValue = ele.parentElement.clientHeight;
    ele.style.maxHeight = `${ismaxheightreduce && marginvalue  == 0 ? pValue-20 : !ismaxheightreduce && marginvalue != 0 ? pValue-marginvalue : pValue}px`
    let clientHeight = ele.clientHeight,
        scrollHeight = ele.scrollHeight,
        result = scrollHeight > clientHeight;

    return {result,pValue};    
}