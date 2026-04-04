import React from "react";
import Container from "../../common/Container";
import ServicesNumber from "../../common/ServicesNumber";
import { homeStatsData } from "../../../hepler/projectArryObj";

const StatsBar = () => {
  return (
    <section className="pb-[115px]  border-b border-[#E5E5E5]">
      <Container>
        <div className="grid grid-cols-4 gap-[66px]">
          {homeStatsData.map((items, StatsBar) => {
            return (
              <ServicesNumber
                label={items.label}
                suffix={items.suffix}
                value={items.value}
                key={StatsBar}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatsBar;
