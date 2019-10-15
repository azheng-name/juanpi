let ajax= new XMLHttpRequest();
ajax.open('get','http://10.31.155.22/1909/xiang/php/jps.php',true);
ajax.send();
ajax.onreadystatechange=function(){
    if(ajax.readyState===4){
        let tupi=JSON.parse(ajax.responseText);
        let ul_2=document.querySelector('.deal-pic ul');
        let li_2=''
        for(let value of tupi){
            li_2+=`
            <li>
            <a href="details.html?sid=${value.sid} " target="_black">
                <img src="${value.url}" alt="">
            </a>
            <div class="douse">
                <span class="douse-sp">
                    <em class="douse-s">￥</em>${value.pic}
                </span>
                <span class="douse-sp-2">
                    <em class="douse-s-2">￥</em> ${value.pcu}
                </span>
            </div>
            <h3>
                <a href="javascript:;">
                   ${value.title}
                </a>
                <span>上新</span>
            </h3>
            <a href="javascript:;" id="xin">
            <i class="lick-ico"></i>
           </a>
            
        </li>
            
            `;
        }
        ul_1.innerHTML=li_1
    }
}
