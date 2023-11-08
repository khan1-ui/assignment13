import BodyContent from "../component/BodyContent";
import FormUseState from "../component/Form";
import Slider from "../component/Slider";



const HomePage = () => {
    return (
        <div className="div-component">
          <br /><br /><br /><br /><br />
            <Slider/>
            <br /><br />
            <BodyContent/><br /><br />
          <FormUseState/>
         
          <h1>I am home page</h1>  
        </div>
    );
};

export default HomePage;