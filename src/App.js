import React, { Component } from 'react';
import ProductCard from './Components/ProductCard.js';
import './App.css';

const APIData = [
    {
        id: '123dft45f123dfg5g',
        imageUrl: 'https://images.vat19.com/covers/large/butter-soda.jpg',
        productName: 'Soda',
        price: 3.05,
        quantityAvailable: 13
    },
    {
        id: '123dfd34f1asdEDa',
        imageUrl: 'https://www.handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-768x768.jpg',
        productName: 'Cookies',
        price: 5.05,
        quantityAvailable: 23
    },
    {
        id: '12342Rft45f123dfg5g',
        imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_57991bf3-03e1-492d-b5d6-0e0223770c6d?wid=488&hei=488&fmt=pjpeg',
        productName: 'Water',
        price: 2.95,
        quantityAvailable: 5
    },
    {
        id: '75T42Rft45f123dfg5g',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/910uahYmmPL._SL1500_.jpg',
        productName: 'Chips',
        price: 1.95,
        quantityAvailable: 25
    },
    {
        id: '7T42Rf4df545f123dRf4',
        imageUrl: 'https://i5.walmartimages.com/asr/fc27a353-3b34-402e-94e6-e2105d6968c3_1.34f4843c019fbbbd31ed0c4d6692b5fe.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
        productName: 'Snicker Bar',
        price: 2.99,
        quantityAvailable: 20
    },
    {
        id: '76ef4Rft45f393dfR7G',
        imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_234b7c68-26f0-403f-8030-6263923057d5?wid=488&hei=488&fmt=pjpeg',
        productName: 'Protein Shake - Chocolate',
        price: 3.99,
        quantityAvailable: 7
    }
];

class App extends Component {
    renderRow(item) {
        const returnVal = [];

        for(let i = 0; i < item.length; i++) {
            returnVal.push(
                <div key={item[i].id} className="col-sm col-xs-12">
                    <ProductCard
                        imageURL={item[i].imageUrl}
                        name={item[i].productName}
                        price={item[i].price}
                        quantityAvailable={item[i].quantityAvailable}
                    />
                </div>
            );
        }

        return returnVal;
    }

    renderProducts(data) {
        const returnComponent = [];
        const iterations = Math.ceil(data.length / 3);

        let j = 0;

        for(let i = 0; i < iterations; i++) {
            returnComponent.push(<div className="row" key={i}> {this.renderRow(data.slice(j, j+3))} </div>);
            j += 3;
        }

        return returnComponent;
    }

  render() {
    return (
      <div className="App">
          <br/>
          <div className="container">
              {this.renderProducts(APIData)}
          </div>
      </div>
    );
  }
}

export default App;
