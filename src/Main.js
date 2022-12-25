import React from 'react';
import HornedBeast from './HornedBeast';


// The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

class Main extends React.Component{
  render(){
    return <>
      <HornedBeast id="1" title="UniWhal" image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="A unicorn and a narwhal nuzzling their horns" />
      <HornedBeast id="2" title="Rhino Family" image_url="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="Mother (or father) rhino with two babies" />
      <HornedBeast id="3" title="Unicorn Head" image_url="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description="Someone wearing a creepy unicorn head mask" />
      <HornedBeast id="4" title="UniLego" image_url="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80" description="Lego figurine dressed in a unicorn outfit" />
      <HornedBeast id="5" title="Basically a unicorn" image_url="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg" description="A narwhal is basically a unicorn after all, right?" />
      <HornedBeast id="6" title="#truth" image_url="https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg" description="The truth behind narwhals" />
      <HornedBeast id="7" title="Baby Rhino" image_url="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg" description="This is actually a figurine but it looks kinda real" />
      <HornedBeast id="8" title="Cera" image_url="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003" description="Three horns but still, horns. And who doesn't like The Land Before Time?" />
      <HornedBeast id="9" title="Narwhal costume" image_url="https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg" description="A woman wearing a blue narwhal costume" />
      <HornedBeast id="10" title="Rhino costume" image_url="https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg" description="Mascots have to get their costumes somewhere" />
      <HornedBeast id="11" title="Believe" image_url="https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg" description="I believe in unicorns, do you?" />
      <HornedBeast id="12" title="" image_url="" description="" />
      <HornedBeast id="13" title="" image_url="" description="" />
      <HornedBeast id="14" title="" image_url="" description="" />
      <HornedBeast id="15" title="" image_url="" description="" />
      <HornedBeast id="16" title="" image_url="" description="" />
      <HornedBeast id="17" title="" image_url="" description="" />
      <HornedBeast id="18" title="" image_url="" description="" />
      <HornedBeast id="19" title="" image_url="" description="" />
      <HornedBeast id="20" title="" image_url="" description="" />
  </>
  }
}


export default Main;