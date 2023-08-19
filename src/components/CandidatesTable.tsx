import { CandidatesTableData } from "@src/assets/data/candidatesTableData";
import { CandidatesTableRow } from "./CandidatesTableRow";
import { CandidatesTableHeader } from "./CandidatesTableHeader";

export interface CandidatesTableProps {
  data: CandidatesTableData[];
}

export const CandidatesTable = (props: CandidatesTableProps) => {
  return (
    <div className="w-full mt-[18px]">
      <CandidatesTableHeader />
      <table className="w-full">
        <tbody>
          {props.data.map((candidate, i) => (
            <CandidatesTableRow
              isFirst={i === 0}
              isLast={i === props.data.length - 1}
              key={candidate.id}
              candidate={candidate.candidate}
              owner={candidate.owner}
              stages={candidate.stages}
              appliedDate={candidate.appliedDate}
              rating={candidate.rating}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
