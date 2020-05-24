import React ,{useState} from 'react'

export default function Home() {
    const [inputText,setInputText] = useState("");
    const [historyList,setHistoryList] = useState<string[]>([]);
    return (
        <div>
            <input onChange={(e)=>{
                setInputText(e.target.value)
                setHistoryList([...historyList,e.target.value])
            }}
            placeholder="Enter some text"/>
            {inputText}
           <p>
               <ul>
                   {historyList.map((rec :string)=>{
                       return <li>{rec}</li>
                   })}
               </ul>
           </p>
        </div>
    )
}
