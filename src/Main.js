import React from 'react';
import HornedBeast from './HornedBeast';


// The Main component needs to pass title, imageUrl, and description into each HornedBeast

class Main extends React.Component{
  render(){
    return <>
      <HornedBeast title="UniWhal" imageUrl="something something" description="something something" />
      <HornedBeast title="UniWhal" imageUrl="something something" description="something something" />
    </>
  }
}


export default Main;