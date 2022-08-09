import { useState } from "react";

export default function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </div>
      </div>

      <div className="counter-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nemo, ea accusantium esse fuga excepturi! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nesciunt voluptates nostrum
            praesentium veritatis quod cupiditate optio ipsum necessitatibus
            maiores! Repellat odio autem dignissimos debitis culpa commodi iure
            consequatur labore delectus.
          </p>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nemo, ea accusantium esse fuga excepturi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae nemo, ea accusantium esse
            fuga excepturi! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt voluptates nostrum praesentium veritatis quod
            cupiditate optio ipsum necessitatibus maiores! Repellat odio autem
            dignissimos debitis culpa commodi iure consequatur labore delectus.
          </p>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nemo, ea accusantium esse fuga excepturi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae nemo, ea accusantium esse
            fuga excepturi! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae nemo, ea accusantium esse fuga excepturi!
          </p>
        </div>
      </div>
    </div>
  );
}
