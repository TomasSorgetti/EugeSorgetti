import React from 'react'



import DevPorfolio1 from "../../assets/img/devPorfolio1.png"
import DevPorfolio2 from "../../assets/img/devPorfolio2.png";
import DevPorfolio3 from "../../assets/img/devPorfolio3.png";

const DevPorfolio = () => {
  return (
    <article>
      <div>
        <div>
          <h4>04 dev portfolio</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et nemo
          vero quas sequi soluta perspiciatis. Porro, enim saepe odio fugiat
          quod dignissimos eaque, nulla repellendus nemo, sunt aliquam quo!
        </p>
      </div>
      <div>
        <div>
          <img src={DevPorfolio1} alt="dev portfolio image" />
        </div>
        <div>
          <div>
            <img src={DevPorfolio2} alt="dev portfolio image" />
          </div>
          <div>
            <div>
              <img src={DevPorfolio3} alt="dev portfolio image" />
            </div>
            <div>
              <div>
                <h5>DAYS ONE</h5>
                <p>Bai Jamjuree Regular</p>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>Check it out</button>
          <p>or see the design on Behance</p>
        </div>
      </div>
    </article>
  );
}

export default DevPorfolio