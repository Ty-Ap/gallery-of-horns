import React from 'react';
import HornedBeast from './HornedBeast';
import data from './horn.json';
import css from './main.css';



// The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

class Main extends React.Component{
  render(){
    return <>
    <main>
      {data.map((beast) => {
        return <HornedBeast _id={beast._id} name={beast.name} image_url={beast.image_url} description={beast.description} 
        keyword={beast.keyword} hornNum={beast.horns} title={beast.title} key={beast.keyword}/>
      }
      )}
    </main>
  </>
  }
}


export default Main;