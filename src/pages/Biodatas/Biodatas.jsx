
import { useEffect, useState } from "react";
import useBiodata from "../../Hooks/useBiodata";
import ShowBiodatas from "./ShowBiodatas";
import TablePagination from '@mui/material/TablePagination';

const Biodatas = () => {
    const biodatas = useBiodata()
    // const showBiodatas = biodatas.slice(0, 20)

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [minAge, setMinAge] = useState('')
    const [maxAge, setMaxAge] = useState('')
    const [gender, setGender] = useState('')
    const [division, setDivision] = useState('')
    const [filteredBiodata, setFilteredBiodata] = useState([]);
    // console.log(filteredBiodata);
    useEffect(() => {
        setFilteredBiodata(biodatas);
    }, [biodatas]);

    //pagination codes
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // console.log(showBiodatas);
    const handleSearch = (e) => {
        e.preventDefault()
        const filterAges = biodatas?.filter((person) => {
            const min = parseInt(minAge)
            const max = parseInt(maxAge)
            return (
                (person.age >= min && person.age <= max) &&
                (gender === 'all' || gender === person.biodataType) &&
                (division === 'all' || division === person.permanentDivision)

            );
        })
        setFilteredBiodata(filterAges)

    }

    // console.log(biodata);
    return (
        <div>
            <section className="p-6 bg-blue-950 text-gray-100 mt-12">
                <div className="container grid gap-6 mx-auto grid-cols-1 lg:grid-cols-3">
                    <div className="w-full rounded-md bg-rose-900 px-5 lg:mt-20">
                        <span className="block mb-2 text-violet-400"></span>
                        <h1 className="text-5xl font-extrabold ">Filter</h1>
                        <p className="my-5">
                            Filter by age [Range] <br /> Biodata type
                            [male|female] <br /> Division
                        </p>
                        <div className="pt-2">
                            <div>
                                <p className=" py-1 text-sm">Min Age</p>
                                <input name="minAge" type="number" placeholder="Min Age" className=" py-2 pl-2 w-full rounded-md focus:ring focus:ri border-gray-700 text-gray-900 "
                                    value={minAge}
                                    onChange={(e) => setMinAge(e.target.value)}
                                />
                            </div>
                            <div>
                                <p className=" py-1 text-sm">Max Age</p>
                                <input name="maxAge" type="number" placeholder="Your name" className=" py-2 pl-2 w-full rounded-md focus:ring focus:ri border-gray-700 text-gray-900"
                                    value={maxAge}
                                    onChange={(e) => setMaxAge(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className=" py-1 text-sm">Biodata Type [male|female]</p>
                            <select className="text-gray-900 py-2 rounded-lg px-10" name="gender" value={gender}
                                onChange={(e) => setGender(e.target.value)}>
                                <option value="all"> all</option>
                                <option value="Male"> Male</option>
                                <option value="Female"> Female</option>
                            </select >
                        </div>
                        <div className="col-span-full text-gray-900 sm:col-span-2 pt-2">
                            <p className=" py-1 text-sm text-white">Division</p>
                            <select className="select py-2 rounded-lg px-24 select-bordered" type="text" name="division" value={division}
                                onChange={(e) => setDivision(e.target.value)}>
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

                        <button onClick={handleSearch} type="button" className="w-full mt-5 py-3 font-semibold rounded bg-rose-400 text-gray-900">Filter Biodata</button>
                    </div>

                    <div className="w-full mx-auto col-span-2 text-center">
                        <h2 className="text-center text-4xl font-extrabold my-5"> Member
                            Profiles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4">
                            {
                                filteredBiodata?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(biodats => <ShowBiodatas key={biodats._id} biodats={biodats}> </ShowBiodatas>)
                            }
                        </div>

                      <div className=" mt-10 bg-rose-400 rounded-lg "> 
                      <TablePagination
                            rowsPerPageOptions={[10,20,30,50,100]}
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Biodatas;