import imageInSrc from './imageInSrc.png';
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">


<div style={{border:'solid 1px black' , maxWidth:'99vw'}}>

 <h1 class="title red">Brahim Ezzdini</h1>

 <br/>

 <img src={imageInSrc} />

 <br />
 <br/>

 <img src="/imageInPublic.png" />

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>

</div>


  );
}

export default App;
