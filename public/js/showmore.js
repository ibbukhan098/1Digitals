

export default function ShowMore(ele){
    let showMore = document.querySelectorAll('.showMore');


    showMore.forEach((showmore,index)=>{
        let isshowmore = isShowmore(showmore);

        
        if(isshowmore.result){
            // showMore.innerText 
            showmore.innerHTML += `<button class="showmore-btn">...Show <span>More</span></button>`;
            
        }

        let value = isshowmore.pValue;
        showmore.querySelector('.showmore-btn').addEventListener('click',(e)=>{
            let spanEle = [...e.target.children];
            if(e.target.classList.contains('active')){
                showmore.style.maxHeight = `${value}px`;
                e.target.classList.remove('active');
                spanEle[0].innerHTML = 'More'
            }
            else{
                showmore.style.maxHeight = '100%';
                e.target.classList.add('active');
                spanEle[0].innerHTML = 'Less'
            }
        })

    })




}

function isShowmore(ele){
    let pValue = ele.parentElement.clientHeight;
    ele.style.maxHeight = `${pValue}px`
    let clientHeight = ele.clientHeight,
        scrollHeight = ele.scrollHeight,
        result = scrollHeight > clientHeight;

    return {result,pValue};    
}