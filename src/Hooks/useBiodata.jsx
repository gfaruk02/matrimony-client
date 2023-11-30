import { useEffect, useState } from "react";


const useBiodata = () => {
    const [biodatas, setBiodatas] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/biodatas')
            .then(res=>res.json())
            .then(data=> setBiodatas(data));
    },[])
    return biodatas
};

export default useBiodata;