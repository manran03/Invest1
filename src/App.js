import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";
import UserProfile from "./components/UserProfile";
import LandingPage  from './components/LandingPage';


const user = {
  fullName: "N. Modi",
  email: "example@example.com",
  phone: "(097) 234-5678",
  mobile: "(098) 765-4321",
  address: "Bay Area, San Francisco, CA",
  job:"soft/ware developer trainee",
  projectStatus: [
    { name: "Web Design", progress: 80 },
    { name: "Website Markup", progress: 72 },
    { name: "One Page", progress: 89 },
    { name: "Mobile Template", progress: 55 },
    { name: "Backend API", progress: 66 }
  ]
};

// function App() {
//   return (
//     <div>
//       <UserProfile
//         fullName={user.fullName}
//         email={user.email}
//         phone={user.phone}
//         mobile={user.mobile}
//         address={user.address}
//         projectStatus={user.projectStatus}
//         job={user.job}
//       />
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <div>
//       <FormComponent/>
//     </div>
//   );
// }

// export default App;



function App() {
  // Sample data for advisors and plans
  const advisors = [
    { title: 'Advisor 1', text: 'Some text for Advisor 1.', buttonLabel: 'Button 1' },
    { title: 'Advisor 2', text: 'Some text for Advisor 2.', buttonLabel: 'Button 2' },
    { title: 'Advisor 3', text: 'Some text for Advisor 3.', buttonLabel: 'Button 3' },
    { title: 'Advisor 4', text: 'Some text for Advisor 4.', buttonLabel: 'Button 4' },
    { title: 'Advisor 5', text: 'Some text for Advisor 5.', buttonLabel: 'Button 5' },
    { title: 'Advisor 6', text: 'Some text for Advisor 6.', buttonLabel: 'Button 6' },
    { title: 'Advisor 7', text: 'Some text for Advisor 7.', buttonLabel: 'Button 7' },
    { title: 'Advisor 8', text: 'Some text for Advisor 8.', buttonLabel: 'Button 8' },
    { title: 'Advisor 9', text: 'Some text for Advisor 9.', buttonLabel: 'Button 9' },
    { title: 'Advisor 10', text: 'Some text for Advisor 10.', buttonLabel: 'Button 10' },
  ];
  
  const plans = [
    { title: 'Plan 1', text: 'Some text for Plan 1.', buttonLabel: 'Button 1' },
    { title: 'Plan 2', text: 'Some text for Plan 2.', buttonLabel: 'Button 2' },
    { title: 'Plan 3', text: 'Some text for Plan 3.', buttonLabel: 'Button 3' },
    { title: 'Plan 4', text: 'Some text for Plan 4.', buttonLabel: 'Button 4' },
    { title: 'Plan 5', text: 'Some text for Plan 5.', buttonLabel: 'Button 5' },
    { title: 'Plan 6', text: 'Some text for Plan 6.', buttonLabel: 'Button 6' },
    { title: 'Plan 7', text: 'Some text for Plan 7.', buttonLabel: 'Button 7' },
    { title: 'Plan 8', text: 'Some text for Plan 8.', buttonLabel: 'Button 8' },
    { title: 'Plan 9', text: 'Some text for Plan 9.', buttonLabel: 'Button 9' },
    { title: 'Plan 10', text: 'Some text for Plan 10.', buttonLabel: 'Button 10' },
  ];
  

  return (
    <div>
      <LandingPage advisors={advisors} plans={plans} />
    </div>
  );
}

export default App;