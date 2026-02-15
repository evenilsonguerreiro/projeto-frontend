import { useState } from "react";
import { OpitionContainer, OpitionList, OpitionItem, Label } from "./style";


const ProductOpitions = ({ title, opitions, shape, type }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <OpitionContainer>
        <Label>{title}</Label>
        <OpitionList>
          {opitions.map((opition, index) => (
            <OpitionItem
              key={index}
              isSelected={selected === index}
              shape={shape}
              type={type}
              value={opition}
              onClick={() => setSelected(index)}
            >
              {type === "text" ? opition : ""}
            </OpitionItem>
          ))}
        </OpitionList>
      </OpitionContainer>
    </>
  );
};

export default ProductOpitions;
