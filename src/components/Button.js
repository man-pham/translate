import React from 'react';

import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
export default class Button extends React.Component {
   // static contextType = LanguageContext;
    render() {
        return(
            <ColorContext.Consumer>
                {color => 
                <button className={`ui button ${`${color || 'primary'}`}`}>
                    <LanguageContext.Consumer>
                        {({language}) => 
                            language === 'english' ? 'Submit' : 'Gui'
                        }
                    </LanguageContext.Consumer>
                </button>
                }
            </ColorContext.Consumer>
        )
            
        
        
        }
}
