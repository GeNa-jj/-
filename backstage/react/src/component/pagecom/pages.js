export default function (pag,page,qty){
    var brr=[];
    var pages=Math.ceil(qty/page);
    // console.log(pages)
    if(pages<5){
        for(let i=1;i<=pages;i++){
            brr.push(i)
        }

    }else{
        if(pag-2>2){
         brr.push(1);
            brr.push('...');
            brr.push(pag-2);
            brr.push(pag-1);
        }else{
            for(let i=1;i<pag;i++){
                brr.push(i)
            }
        }
        if(pag+3<pages){
            brr.push(pag);
            brr.push(pag+1);
            brr.push(pag+2);
            brr.push('...');
            brr.push(pages)
        }else{
            for(let i=pag;i<=pages;i++){
                brr.push(i)
            }

        } 
    }
    return(brr)
}