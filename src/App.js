import React from 'react';
import UserCreate from '../src/components/UserCreate';
import {LanguageStore} from '../src/context/LanguageContext';
import ColorContext from '../src/context/ColorContext';
import LanguageSelector from './components/LanguageSelector'
import './App.css';

class  App extends React.Component {
  state = { language: 'english'}


  onLanguageChange = (language)  => {
    this.setState({language});
  }


  render(){
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value="red">
        
            <UserCreate />
        
        </ColorContext.Provider>
      </LanguageStore>
   
    </div>
  );
  }
}

export default App;
