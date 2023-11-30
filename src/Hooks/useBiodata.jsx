import { useEffect, useState } from "react";


const useBiodata = () => {
    const [biodatas, setBiodatas] = useState([]);
    useEffect(()=>{
        fetch('https://matrimony-server-smoky.vercel.app/biodatas')
            .then(res=>res.json())
            .then(data=> setBiodatas(data));
    },[])
    return biodatas
};

export default useBiodata;