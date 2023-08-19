import { CalendarIcon } from "@src/icons/CalendarIcon";
import { CandidatesIcon } from "@src/icons/CandidatesIcon";
import { CareerSiteIcon } from "@src/icons/CareerSiteIcon";
import { DashboardIcon } from "@src/icons/DashboardIcon";
import { EmployeeIcon } from "@src/icons/EmployeeIcon";
import { JobsIcon } from "@src/icons/JobsIcon";
import { MessageIcon } from "@src/icons/MessageIcon";
import { RefferalsIcon } from "@src/icons/RefferalsIcon";
import { ReportIcon } from "@src/icons/ReportIcon";
import { SettingsIcon } from "@src/icons/SettingsIcon";

export interface NavbarData {
  id: number;
  sectionName: string;
  categories: { id: number; name: string; icon: JSX.Element }[];
}

export const navbarSections = [
  {
    id: 1,
    sectionName: "menu",
    categories: [
      { id: 1.1, name: "Dashboard", icon: DashboardIcon() },
      { id: 1.2, name: "Message", icon: MessageIcon() },
      { id: 1.3, name: "Calendar", icon: CalendarIcon() },
    ],
  },
  {
    id: 2,
    sectionName: "recruitment",
    categories: [
      { id: 2.1, name: "Jobs", icon: JobsIcon() },
      { id: 2.2, name: "Candidates", icon: CandidatesIcon() },
      { id: 2.3, name: "My Referrals", icon: RefferalsIcon() },
      { id: 2.4, name: "Career Site", icon: CareerSiteIcon() },
    ],
  },
  {
    id: 3,
    sectionName: "organization",
    categories: [
      { id: 3.1, name: "Employee", icon: EmployeeIcon() },
      { id: 3.2, name: "Structure", icon: RefferalsIcon() },
      { id: 3.3, name: "Report", icon: ReportIcon() },
      { id: 3.4, name: "Settings", icon: SettingsIcon() },
    ],
  },
];
