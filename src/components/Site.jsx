import React from 'react'

const siteText=[
  {
    text:["Make","site compliant with","mbc academy"],
    title:"웹표준을 준수한 사이트 제작",
    code:"/",
    view:"/",
    infor:["site coding","production preiod : two days","html5, css3, script"],
  },
  {
    text:["Make","site compliant with","mbc academy"],
    title:"웹표준을 준수한 사이트 제작",
    code:"/",
    view:"/",
    infor:["site coding","production preiod : two days","html5, css3, script"],
  },
  {
    text:["Make","site compliant with","1차포트폴리오"],
    title:"웹표준을 준수한 사이트 제작",
    code:"/",
    view:"/",
    infor:["site coding","production preiod : two days","html5, css3, script"],
  },
  {
    text:["Make","site compliant with","개인포트폴리오"],
    title:"웹표준을 준수한 사이트 제작",
    code:"/",
    view:"/",
    infor:["site coding","production preiod : two days","html5, css3, script"],
  },
]

const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <h2 className='site_title'>
          Site coding
          <em>나의 작업물</em>
        </h2>
        <section className='site_wrap'>
          {siteText.map((site,key)=>(
            <article className={`site_item s${key+1}`} key={key}>
            <span className='num'>{key+1}.</span>
            <div className="text">
              <div>{site.text[0]}</div>
              <div>{site.text[1]}</div>
              <div>{site.text[2]}</div>
            </div>
            <h3 className='title'>{site.title}</h3>
            <div className="btn">
              <a href={site.code}>code</a>
              <a href={site.view}>view</a>
            </div>
            <div className="infor">
              <span>{site.infor[0]}</span>
              <span>{site.infor[1]}</span>
              <span>{site.infor[2]}</span>
            </div>
          </article>
          ))}

          
          
        </section>
      </div>
    </section>
  )
}

export default Site
