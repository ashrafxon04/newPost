import React  from "react";
import Card from './Card';
import './main.css'

export default class Fruit extends React.Component {
    render() {
        return (
            <div>
            <div className="Title">
                <h1>Fruits</h1>
            </div> 
            <div className="wrapper">
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Anor'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'SHoptoli'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Olma'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Bexi'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Nok'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Gilos'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Shaftoli'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Olxori'/>
              <Card img= 'https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg' title = 'Orik'/>
            </div>
            </div>
        )
    }
}