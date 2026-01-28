import React from 'react'

const skillText =[
  {
    title:"꿈을 설계하고 디자인하다.",
    desc:" 나는 공간을 만드는 것을 좋아한다. 어렸을때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음껏 만들 수 있다는 건 코딩의 가장 큰 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.",
  },
    {
    title:"열심히 할 수록 기회는 따른다.",
    desc:"  나는 공간을 만드는 것을 좋아한다. 어렸을때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음껏 만들 수 있다는 건 코딩의 가장 큰 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.",
  },
    {
    title:"나에게 정직하자.",
    desc:" 나는 공간을 만드는 것을 좋아한다. 어렸을때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음껏 만들 수 있다는 건 코딩의 가장 큰 매력인 것 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.",
  },
]

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <div className="skill_title">
          Challeng<em>나의도전</em>
        </div>
        <div className="skill_desc">
            {
              skillText.map((skill,key) =>(
                <div key={key}>
                    <span>{key+1}.</span>
                    <h3>{skill.title}</h3>
                    <p>{skill.desc}</p>
                </div>
              ))
            } 

        </div>
      </div>
    </section>
  )
}

export default Skill

