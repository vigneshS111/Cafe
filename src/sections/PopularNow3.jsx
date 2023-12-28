import {
  ScrollComponent,
  ScrollComponentStyles,
} from "../components/ScrollComponent";
import Card from "../components/Card";

import { popular } from "../constants/coffee_data";
const MyContent = () => (
  <div className="flex flex-row  justify-center gap-5 max-sm:m-auto ">
    {popular.slice(0, 3).map((item) => {
      return <Card key={item.id} width="275px" height="260px" item={item} />;
    })}
  </div>
);

const PopularNow3 = () => (
  <div className="mt-44 pl-5">
    <h3 className="font-poppins font-semibold text-[32px] pl-6 text-secondary max-sm:mb-5">
      Popular <span className="border-b-4  border-primary inline">Now</span>
    </h3>
    <style>{ScrollComponentStyles}</style>
    <ScrollComponent>
      <MyContent />
    </ScrollComponent>
  </div>
);

export default PopularNow3;
