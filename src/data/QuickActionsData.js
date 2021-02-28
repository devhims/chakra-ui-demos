import { MdContactMail } from 'react-icons/md';
import {
  TestingCenters,
  SymptomsChecker,
  EmergencyNumbers,
  DoctorChat,
} from '../assets/IconsV1';

const QuickActions = [
  {
    icon: TestingCenters,
    title: 'Testing Centers',
    destination: 'openChat',
  },
  {
    icon: SymptomsChecker,
    title: 'Symptom Checker',
    destination: 'openChat',
  },
  {
    icon: EmergencyNumbers,
    title: 'Emergency Numbers',
    destination: 'openChat',
  },
  {
    icon: DoctorChat,
    title: 'Chat with a Doctor',
    destination: 'openChat',
  },
];

export default QuickActions;
