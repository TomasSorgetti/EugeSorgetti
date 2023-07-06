import React from 'react'
import learningSpark from "../../assets/img/learningSpark.png"
const LearningSpark = () => {
  return (
    <section>
      <article>
        <h4>03 learningspark</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic
          nesciunt sint a quis esse assumenda voluptates consectetur corrupti
          tempora eius, vitae officiis, id cum asperiores iusto atque quibusdam
          in.
        </p>
        <div>
          <button>Read case study</button>
          <p>Only available in Spanish</p>
        </div>
      </article>
      <img src={learningSpark} alt="learning spark image" />
    </section>
  );
}

export default LearningSpark