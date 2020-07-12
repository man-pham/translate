import React from 'react';
import Context from '../context/LanguageContext'

export default class LanguageSelector extends React.Component {
    static contextType = Context;
    render(){
        return(<div>
            Select a language:
            <i className="flag us" onClick={()=> this.context.onLanguageChange('english')}/>
            <i className="flag vn" onClick={()=> this.context.onLanguageChange('vietnam')}/>
          </div>)
    }
}