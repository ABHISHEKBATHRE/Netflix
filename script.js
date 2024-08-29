let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let img1=document.querySelector("#p1");
let img2=document.querySelector("#p2");
let img3=document.querySelector("#p3");
let img4=document.querySelector("#p4");
let img5=document.querySelector("#p5");
let img6=document.querySelector("#p6");
let whatn=document.querySelector("#whatn")
let howm=document.querySelector("#howm")
let wherec=document.querySelector("#wherec")
let howd=document.querySelector("#howd")
let whatc=document.querySelector("#whatc")
let isnet=document.querySelector("#isnet")
img1.addEventListener("click",()=>{
    if(a==0)
    {
          a=1;
          whatn.innerHTML=`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`;
    }
    else{
        a=0;
        whatn.innerHTML="";
    }
})
img2.addEventListener("click",()=>{
    if(b==0)
    {
          b=1;
          howm.innerHTML=`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`;
    }
    else{
        b=0;
        howm.innerHTML="";
    }
})
img3.addEventListener("click",()=>{
    if(c==0)
    {
          c=1;
          wherec.innerHTML=`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`;
    }
    else{
        c=0;
        wherec.innerHTML="";
    }
})
img4.addEventListener("click",()=>{
    if(d==0)
        {
              d=1;
              howd.innerHTML=`Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`;
        }
        else{
            d=0;
            howd.innerHTML="";
        }
})
img5.addEventListener("click",()=>{
    if(e==0)
        {
              e=1;
              whatc.innerHTML=`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`;
        }
        else{
            e=0;
            whatc.innerHTML="";
        }
})
img6.addEventListener("click",()=>{
    if(f==0)
    {
          f=1;
          isnet.innerHTML=`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`;
    }
    else{
        f=0;
        isnet.innerHTML="";
    }
})