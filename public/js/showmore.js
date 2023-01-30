

export default function ShowMore(ele){
    let showMore = document.querySelectorAll('.showMore');


    showMore.forEach((showmore,index)=>{
        let ismaxheightreduce = showmore.classList.contains('mx-h-3');
        let isshowmore = isShowmore(showmore,ismaxheightreduce);

        
        if(isshowmore.result){
            // showMore.innerText 
            showmore.innerHTML += `<button class="showmore-btn"><span>...Show More</span></button>`;
            
        }

        let value = ismaxheightreduce ? isshowmore.pValue-20 : isshowmore.pValue;
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

function isShowmore(ele,ismaxheightreduce=false){
    let pValue = ele.parentElement.clientHeight;
    ele.style.maxHeight = `${ismaxheightreduce ? pValue-20 : pValue}px`
    let clientHeight = ele.clientHeight,
        scrollHeight = ele.scrollHeight,
        result = scrollHeight > clientHeight;

    return {result,pValue};    
}