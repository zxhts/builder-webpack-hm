import React from 'react';
import ReactDOM from 'react-dom';
import { helloworld, CustomBlock } from './helloworld.js';


function App() {

    const postMessage = () => {
    }
    
    return(
        <div>
            <div onClick={() => postMessage()}>发消息测试</div>
            <CustomBlock/>
            {helloworld()}
        </div>
    )
}

ReactDOM.render(
    <div>
       <App />
    </div>,
    document.getElementById('root')
);
