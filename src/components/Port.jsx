import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//이미지의 이름을 정의
import Port1 from "../assets/img/port_1.png";
import Port2 from "../assets/img/port_2.png";
import Port3 from "../assets/img/port_3.png";
import Port4 from "../assets/img/port_4.png";
import Port5 from "../assets/img/port_5.png";
import Port6 from "../assets/img/port_6.png";

const portText=[
    {
      num : "01",
      title : "A팀 프로젝트",
      desc : " 11111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil commodi incidunt assumenda, aperiam corrupti nemo temporibus dolore placeat aliquid corporis omnis tempore dolorum, magni voluptatem voluptatum exercitationem molestias excepturi.",
      img : Port1,
      code: "/",
      alt : "포폴이미지1",
      site_code :"/",
    },
    {
      num : "02",
      title : "B팀 프로젝트",
      desc : " 22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil commodi incidunt assumenda, aperiam corrupti nemo temporibus dolore placeat aliquid corporis omnis tempore dolorum, magni voluptatem voluptatum exercitationem molestias excepturi.",
      img : Port2,
      code: "/",
      alt : "포폴이미지2",
      site_code :"/",
    },
    {
      num : "03",
      title : "C팀 프로젝트",
      desc : " 33333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil commodi incidunt assumenda, aperiam corrupti nemo temporibus dolore placeat aliquid corporis omnis tempore dolorum, magni voluptatem voluptatum exercitationem molestias excepturi.",
      img : Port3,
      code: "/",
      alt : "포폴이미지3",
      site_code :"/",
    },
    {
      num : "04",
      title : "D팀 프로젝트",
      desc : " 44444 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil commodi incidunt assumenda, aperiam corrupti nemo temporibus dolore placeat aliquid corporis omnis tempore dolorum, magni voluptatem voluptatum exercitationem molestias excepturi.",
      img : Port4,
      code: "/",
      alt : "포폴이미지4",
      site_code :"/",
    },
    {
      num : "05",
      title : "E팀 프로젝트",
      desc : " 55555 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil commodi incidunt assumenda, aperiam corrupti nemo temporibus dolore placeat aliquid corporis omnis tempore dolorum, magni voluptatem voluptatum exercitationem molestias excepturi.",
      img : Port5,
      code: "/",
      alt : "포폴이미지5",
      site_code :"/",
    },
    {
      num : "06",
      title : "F팀 프로젝트",
      desc : " 66666 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nihil commodi incidunt assumenda, aperiam corrupti nemo temporibus dolore placeat aliquid corporis omnis tempore dolorum, magni voluptatem voluptatum exercitationem molestias excepturi.",
      img : Port6,
      code: "/",
      alt : "포폴이미지6",
      site_code :"/",
    },
]

const Port = () => {

  const hRef = useRef(null);
  //useRef:변수값을 초기화시켜주는 훅 명령어입니다.
  //hRef = useRef(null);=>hREF변수를 null값으로 초기화 시켜준겁니다.
  //이변수는 가로 스크롤이 작용될 부모요소를 참조할때 사용하기 위해 지정
  //ref어떤 변수를 참조할때 사용하는 명령어
  
  const secRef=useRef([]);
  //useRef([]):변수의 초기값을 비어있는  배열로 지정.
  //가로스크롤하는 article 0~5개를 지정하기 위해 사용

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const horizontal = hRef.current
    // .current : useRef객체의 프로퍼티 속성으로 실제로 참조하고 있는 값을 나타냄
const sections =secRef.current;
let scrollT =gsap.to(sections,{
  xPercent : -600,
  ease:"none",

  scrollTrigger:{
      trigger:horizontal,//움직이는 객체
      start:"top 56px", //시작위치,위에서 56px내려와서
      end:"+=3000", //값이 작을때 속도가 빠르고 값이 높으면 사라짐.
      pin:true, //객체들이 움직일때 부모값이 움직임 없음
      scrub:1,//부드럽게 스크롤되게 해줌
  }
})
return ()=>{
  scrollT.kill();
  //다른 컴퍼넌트로 갔을때 삭제해주는 이벤트
}
  },[]);

  //  useEffect(()=>{})이벤트를 줄때 사용하는 효과 훅명령어
  //컴퍼넌트가 화면에 나타날때 어떤 효과를 줄때 사용하는 훅명령어
//  useEffect(()=>{},[]);랜더링 될때마다 실행되는 명령어
//  useEffect(()=>{},[]); 화면에 첫 랜더링 될때 한번만 실행
//  useEffect(()=>{},[COUNT]);카운터값이 변할때마다 효과가 실행됨

  return (
      <section id='port' ref={hRef}>
          <div className="port_inner">
            <div className="port_title">
              portfolio <em>작업물</em>
            </div>
            <div className="port_wrap">

              {portText.map((port,key)=>(
                <article 
                className={`port_item p${key+1}`} 
                key={key}
                ref={(e1) => (secRef.current[key] = e1)}
                >
                <span className='num'>0{key+1}.</span>
                <a href={port.img_code}  className='img'>
                  <img src={port.img} alt={port.alt} />
                </a>
                <h3 className='title'>{port.title}</h3>
                <div className="desc">
                {port.desc}
                </div>
                <a href={port.site_code} className='site' rel='noreferrer noopener'>사이트 보기</a>
                {/* noreferrer: 정보 보안용 => 사용자가 링크를 클릭했을때 어디서 왔는지 정보가 전달되게 해주는 경로를 숨겨줌 */}
                 {/* noopener:  보안용 => 차단,해킹,피싱등을 방지해줌 */}
              </article>
              ))}

             
              
            </div>
          </div>
      </section>
  )
}

export default Port
