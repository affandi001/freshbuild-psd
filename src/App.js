import './App.css';
// import Main1 from './portfolio/main1';
// import Main2 from './portfolio/main2';
// import Main3 from './portfolio/main3';
// import Main4 from './portfolio/main4';
import Header1 from './Components/header';
import Header2 from './Components/div1';
import Header3 from './Components/div2';
import Header4 from './Components/Card1';
import Header5 from './Components/Card2';
import Header6 from './Components/main1';
import Header7 from './Components/main4';
import Header9 from './Components/main6';
import Header10 from './Components/grid1';
import Header11 from './Components/grid2';
import Header12 from './Components/subfooterbutton';
import Header13 from './Components/subfooter2';
import Header14 from './Components/footer';


function App() {
  return (
    <>
    
    <Header1 />
      <div className='bg-[#E5E5E5] '>       
        <Header2 />
        <Header3 />
        <Header4 />
        <Header5 />
        <Header6 />
        <Header7 />
        <Header9 />
        <Header10 />
        <Header11 />     
        <Header12 />
        </div>
        <Header13 />
        <div className='bg-[#322C4E]'>
        <Header14 />
        </div> 
        {/* <Main1 />
        <Main2 /> 
        <Main3 />
        <Main4 /> */}
    </>
  );
}

export default App;
