import React from "react";
import { useState, useRef } from "react";

export const CustomBlock = () => {
    const inputEl = useRef(null);
    const initValue = 0;
    const [ data, setData ] = useState(initValue);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
    };

    const addNode = () => {
        setData(parseInt(Math.random(0,1) * 10));
        console.log(inputEl.current.value, 'sssss---->>>');
        inputEl.current.focus();
    }

    const renderInput = () => {
        if(data > 5){
            const dataMap = [1,2,3];
            return dataMap.map((item) => {
                return(
                    <div>
                        <input value={item} key={item} ref={inputEl}></input>
                    </div>
                )
               
            })
        }
        return (
            <div>
                <input ref={inputEl} value={'ss'}></input>
            </div>
        )
    }

    return(
        <div style={{color: "skyblue"}}>
            this is Block yes 2
            {/* <div>
                <input ref={inputEl} type="text" />
            </div> */}
            {renderInput()}
            <button onClick={onButtonClick}>Focus the input</button>
            <button onClick={addNode}>addNode</button>
        </div>
    )
}

export function helloworld() {
    return 'Hello webpack 111222';
}

