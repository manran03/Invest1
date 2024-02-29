import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";
import UserProfile from "./components/UserProfile";


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

function App() {
  return (
    <div>
      <UserProfile
        fullName={user.fullName}
        email={user.email}
        phone={user.phone}
        mobile={user.mobile}
        address={user.address}
        projectStatus={user.projectStatus}
        job={user.job}
      />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <FormComponent/>
//     </div>
//   );
// }

// export default App;