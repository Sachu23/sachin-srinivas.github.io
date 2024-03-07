import Maincomponent from "./Components/Maincomponent";
import {useState, useEffect} from 'react';
import WelcomePage from './Components/WelcomePage';
import PreLoader from './Components/PreLoader';
import { Fade } from "react-awesome-reveal";

function App() {
  const [loading, setloading] = useState(false);
  const [showMainComponent, setShowMainComponent] = useState(false);

  useEffect( ()=> {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, [])

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      // Set state to show MainComponent after loading
      setShowMainComponent(true);
    }, 3000); // Assuming a loading time of 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    loading ? (
      <div className="App-header">
        <div className="loader">
        <PreLoader/>
        </div>
      </div>
      
    )
    :
    (
      <div className="App-header">
 
        <Fade>
          <Maincomponent/>
        </Fade>

      </div>
    )
  );
}

export default App;

/*

return (
    <div className="App-header"> 
      {
         loading ? (
          <div className="loader">
            <CircleLoader color={"#36D7B7"} 
            loading={loading} 
            size={50} />
            &nbsp;&nbsp;&nbsp;
            <h3> Loading </h3>
          </div>
          )
         :
         (<Fade><Maincomponent/></Fade>)
      }
      
    </div>
  );
*/
