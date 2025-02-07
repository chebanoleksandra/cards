import logo from './logo.svg';
import './App.css';
import { PackageCard } from './HW';

// const arr= [{isInPackage: true, benefit: "Sample Text Here"}, 
// {isInPackage: true, benefit: "Other Text Title"}, 
// {isInPackage: true, benefit: "Text Space Goes Here"}, 
// {isInPackage: false, benefit: "Description Space"}] 

const Card1 = {
  title: 'Basic',
  price: 2.99,
  color: '#008059',
  mas: [{ isInPackage: true, benefit: "Sample Text Here" },
  { isInPackage: false, benefit: "Other Text Title" },
  { isInPackage: false, benefit: "Text Space Goes Here" },
  { isInPackage: false, benefit: "Description Space" }]
};

const Card2 = {
  title: 'Standart',
  price: 5.99,
  color: '#0068db',
  mas: [{ isInPackage: true, benefit: "Sample Text Here" },
  { isInPackage: true, benefit: "Other Text Title" },
  { isInPackage: true, benefit: "Text Space Goes Here" },
  { isInPackage: false, benefit: "Description Space" }]
};

const Card3 = {
  title: 'Premium',
  price: 0.99,
  color: '#003669',
  mas: [{ isInPackage: true, benefit: "Sample Text Here" },
  { isInPackage: true, benefit: "Other Text Title" },
  { isInPackage: true, benefit: "Text Space Goes Here" },
  { isInPackage: true, benefit: "Description Space" }]
}

function App() {
  return (
    <div id='wrapper'>
      <PackageCard info={Card1}></PackageCard>
      <PackageCard info={Card2}></PackageCard>
      <PackageCard info={Card3}></PackageCard>
    </div>
  );
}

export default App;
