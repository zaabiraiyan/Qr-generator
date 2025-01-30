import React, { useState } from 'react'

export const Qrcodenew = () => {
    const [img,setImg]=useState("");
    /* here we put false because if there is loading true after loading finish it became false*/
    const [loading,setloading]=useState(false);

    /* qrdata to put in link present in url */
    const [qrdata,setqrdata]=useState("ismail")

    /* qr size setting */

    const [qrsize,setqrsize]=useState("500")

    const [qrname,setqrname]=useState("ismail")

    const generateqr=()=>{
        setloading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${qrsize}x${qrsize}`;
            setImg(url)
        }catch(err){
            console.log("error caught in qrcode",err)
        }finally{
            setloading(false)
        }
            
    }
    const downloadqr=()=>{
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link=document.createElement("a")
            link.href=URL.createObjectURL(blob)
            link.download=`${qrname}.png`
            document.body.appendChild(link)
            link.click();
            document.body.removeChild(link)
        })


    }

  return (
    <div className='qr-container'>
        <h1>Qr-code Generator</h1>
        {img &&<img src={img} title='qrcode' className='image' alt="image" height="130px" width="150px" />}
        {loading &&<p>loading...</p>}
        <div>
            <label htmlFor="user-label" className='input-label'>Enter the text:</label>
            <input type="text" value={qrdata} onChange={(e)=>setqrdata(e.target.value)} id='user-label' placeholder='text...'/>

            <label htmlFor="size-label" className='input-label'>Enter the size(eg.150px):</label>
            <input type="text" value={qrsize}  onChange={(e)=>setqrsize(e.target.value)}  id='size-label' placeholder='size...'/>
            <label htmlFor="size-label" className='input-label'>Enter the download file name:</label>
            <input type="text" value={qrname}  onChange={(e)=>setqrname(e.target.value)}  id='size-label' placeholder='size...'/>
            <button className='generate-btn' onClick={generateqr}>generate qrcode</button>
            <button className='download-btn' onClick={downloadqr}>download qrcode</button>
        </div>
        <p className='footer'>Designed by <a href="">zaabi raiyan</a></p>
    </div>
  )
}
