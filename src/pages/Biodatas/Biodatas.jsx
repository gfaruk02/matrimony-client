
import { useEffect, useState } from "react";
import useBiodata from "../../Hooks/useBiodata";
import ShowBiodatas from "./ShowBiodatas";

const Biodatas = () => {
    const biodatas = useBiodata()
    // console.log(biodatas);
    const [filteredBiodata, setFilteredBiodata] = useState([]);
    const [filters, setFilters] = useState({
        minAge: '',
        maxAge: '',
        gender: 'all',
        division:'all',
    });
    console.log(filters);
    useEffect(() => {
        setFilteredBiodata(biodatas);
      }, [biodatas]);


    // const [biodata, setBiodata] = useState(biodatas)
    // console.log(biodata);
    const handleSearch = (e) =>{
    //    console.log(e);
        const newfilteredBiodata = biodatas?.filter((data)=>{
            // console.log(data);
            const age = parseInt(data.age);
            // console.log(age);
            const minAge =(filters.minAge)
            console.log(minAge);
            const maxAge =(filters.maxAge);
            console.log(minAge);
            return(
                (age>= minAge && age <= maxAge) &&
                (filters.gender == data.biodataType) &&
                (filters.division == data.permanentDivision)
    
            );
    
        })
        e.preventDefault()
       
        setFilteredBiodata(newfilteredBiodata)
    };

    // console.log(biodata);
    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-100 mt-12">
                <div className="container grid gap-6 mx-auto grid-cols-1 lg:grid-cols-3">
                    <div className="w-full rounded-md bg-gray-900 px-5 lg:mt-20">
                        <span className="block mb-2 text-violet-400"></span>
                        <h1 className="text-5xl font-extrabold ">Filter</h1>
                        <p className="my-8">
                            You can filter by age [Range], biodata type
                            [male|female] , filter by division [Dhaka,Chattagram,Rangpur,Barisal ,
                            Khulna,Maymansign,Sylhet]
                        </p>
                        <div className="pt-5">
                           <div> 
                           <p className="text-sm">Min Age</p>
                            <input name="minAge" type="number" placeholder="Min Age" className=" py-2 w-full rounded-md focus:ring focus:ri border-gray-700 text-gray-900 "
                            value={filters.minAge}
                            onChange={(e) => setFilters(e.target.value)}
                            />
                           </div>
                           <div> 
                           <p className="text-sm">Max Age</p>
                            <input name="maxAge" type="number"  placeholder="Your name" className=" py-2 w-full rounded-md focus:ring focus:ri border-gray-700 text-gray-900" 
                            value={filters.maxAge}
                            onChange={(e) => setFilters(e.target.value)}
                            />
                           </div> 
                        </div>
                        <div className="pt-5">
                            <p className="text-sm">Biodata Type [male|female]</p>
                            <select className="text-gray-900 py-2 px-10" name="gender" value={filters.gender}
                            onChange={(e) => setFilters(e.target.value)}> 
                                <option value="all"> all</option>
                                <option value="Male"> Male</option>
                                <option value="Female"> Female</option>
                            </select >
                        </div>
                        <div className="col-span-full text-gray-900 sm:col-span-2 pt-2">
                            <p className="text-sm">Division</p>
                            <select className="select py-1 rounded-lg px-24 select-bordered" type="text" name="division" value={filters.division}
                            onChange={(e) => setFilters(e.target.value)}> 
                                <option value="all">all</option>
                                <option value="Dhaka"> Dhaka</option>
                                <option value="Chattagram"> Chattagram</option>
                                <option value="Rangpur"> Rangpur</option>
                                <option value="Barisal"> Barisal</option>
                                <option value="Khulna"> Khulna</option>
                                <option value="Maymansign"> Maymansign</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>
                        </div>
                        {/* <div className="col-span-full text-gray-900 sm:col-span-2">
                <label className="text-sm text-white">Race</label>
  <select name="race" className="select py-1 rounded-lg px-24 select-bordered">
    <option disabled selected>Pick one</option>
    <option>Bangali</option>
    <option>Chakma</option>

  </select>
  
				</div> */}


                        <button onClick={handleSearch} type="button" className="w-full mt-5 py-3 font-semibold rounded bg-violet-400 text-gray-900">Join the waitlist</button>
                    </div>

                    <div className="w-full mx-auto col-span-2 text-center">
                        <h2 className="text-center text-4xl font-extrabold my-5"> Member
                            Profiles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4">
                            {
                                filteredBiodata?.map(biodats => <ShowBiodatas key={biodats._id} biodats={biodats}> </ShowBiodatas>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Biodatas;