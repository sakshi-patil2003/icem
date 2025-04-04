import CompHero from "../components/Computer/CompHero"; // Import CompHero
import CompPointers from "../components/Computer/CompPointers"; // Import CompPointers
import ProgramOverview from "../components/Computer/ProgramOverview";
import CompOfferings from "../components/Computer/CompOfferings";
import CompStudying from "../components/Computer/CompStudying";
import CompBrochure from "../components/Computer/CompBrochure";
import CompHighlights from "../components/Computer/CompHighlights";
import CompCarrer from "../components/Computer/CompCarrer";
import CompRecruiter from "../components/Computer/CompRecruiter";
import CompJoin from "../components/Computer/CompJoin";
import AutoChatbot from "../components/AutoChatbot"; // Import AutoChatbot
import MechJourny from "../components/Mech/MechJourny";

function Computer() {
  return (
    <div className="">
      {/* Render the child component */}
      <CompHero />
      <CompPointers />
      <ProgramOverview />
      <CompOfferings />
      <CompStudying />
      <CompBrochure />
      <CompHighlights />
      <CompJoin />
      <CompCarrer />
      {/* <CompRecruiter /> */}
      <AutoChatbot />
      <MechJourny/>
    </div>
  );
}

export default Computer;
