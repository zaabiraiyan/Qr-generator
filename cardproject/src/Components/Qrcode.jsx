import { useState } from "react"

export const Qrcode = () => {

    const [img,setImg]= useState("");
    const [loading,setloading]=useState(false);
    const [qrdata,setqrdata]=useState("ismail")
    const [qrsize,setqrsize]=useState("150")
   

    const generateqr=async()=>{
        setloading(true);
        try{
            /* here encode uri components for if you enter any website link it contain symbols so it encode it */
            const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${qrsize}x${qrsize}`;
            setImg(url)
        }
        catch(err){
            console.log("qr-code",err)
        }
        finally{
            setloading(false)
        }
        
           
    }

    const downloadqr=()=>{
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link= document.createElement("a")
            link.href=URL.createObjectURL(blob)
            link.download="qr.png";
            document.body.appendChild(link)
            link.click();
            document.body.removeChild(link)
        })
        

    }
  return (
   <div className="app-container">
    <h1>Qr-code Generator</h1>
    {img && <img src={img} alt="" className="qr-image" height="150px" width="170px" />}
    {loading &&<p>loading....</p>}
    <div>
    <label htmlFor="inputlabel" className="input-container">
        enter the text:
    </label>
    <input type="text" id="inputlabel" value={qrdata} onChange={(e)=>setqrdata(e.target.value)} placeholder="text..."/>
    <label htmlFor="sizelabel" className="input-container">
        enter the size(eg.150px):
    </label>
    <input type="text" id="sizelabel" value={qrsize} onChange={(e)=>setqrsize(e.target.value)} placeholder="size..." />
    <button className="generate-button" disabled={loading} onClick={generateqr}>generate qr code</button>
    <button className="download-button" onClick={downloadqr} >download qrcode</button>
    </div>
    <p className="footer">
        Designed by <a href="">zaabi Raiyan</a>
    </p>
   </div>
  )
}
