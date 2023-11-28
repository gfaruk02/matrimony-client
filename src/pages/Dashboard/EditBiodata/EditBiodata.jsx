import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const EditBiodata = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const handaleEditBiodata= (e) =>{
        e.preventDefault();
        const form = e.target;
        const member = form.member.value;
        const name = form.name.value;
        const fatherName = form.fatherName.value;
        const motherName = form.motherName.value;
        const dateOfBirth = form.dateOfBirth.value;
        const image = form.image.value;
        const biodataType = form.biodataType.value;
        const occupation = form.occupation.value;
        const race = form.race.value;
        const age = form.age.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const permanentDivision = form.permanentDivision.value;
        const presentDivision = form.presentDivision.value;
        const mobileNumber = form.mobileNumber.value;
        // const email = form.email.value;
        const expectedPartnerAge = form.expectedPartnerAge.value;
        const expectedPartnerHeight = form.expectedPartnerHeight.value;
        const expectedPartnerWeight = form.expectedPartnerWeight.value;

    const biodataInfo =  {member,name,fatherName,motherName, dateOfBirth, image,occupation, biodataType,race, age, height, weight, permanentDivision, presentDivision, mobileNumber, email: user.email, expectedPartnerAge, expectedPartnerHeight, expectedPartnerWeight }
    console.log(biodataInfo);
    if (user) {
        axiosSecure.post('/biodatas', biodataInfo)
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${name} Save And Publish successfully`,
                    showConfirmButton: false,
                    timer: 1000
                });
                form.reset();
            }
        })
    }
}
    return (
        <div>
          <section className="p-6 bg-gray-800 text-gray-50">
	<form onSubmit={handaleEditBiodata} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">member</label>
					<input name="member" value='User' type="text" placeholder="User" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Name</label>
					<input name="name" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Fathers Name</label>
					<input name="fatherName" type="text" placeholder="Fathers Name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Mothers name</label>
					<input name="motherName" type="text" placeholder="Mothers name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Date of birth</label> <br />
                    <input className="text-gray-800 rounded" type="date" id="birthday" name="dateOfBirth"/>
				</div>
				<div className="col-span-full">
					<label  className="text-sm">Profile Image Link</label>
					<input name="image" type="text" placeholder="Profile Image Link" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full text-gray-900 sm:col-span-2">
                <label className="text-sm text-white">Biodata Type</label>
  <select name="biodataType" className="select py-1 rounded-lg lg:px-16 select-bordered">
    <option disabled selected>Pick one</option>
    <option>Male</option>
    <option>Female</option>

  </select>
				</div>
				<div className="col-span-full text-gray-900 sm:col-span-2">
                <label className="text-sm text-white">Occupation</label>
  <select name="occupation" className="select py-1 rounded-lg lg:px-16 select-bordered">
    <option disabled selected>Pick one</option>
    <option>Job</option>
    <option>Student</option>
    <option>House Wife</option>

  </select>
				</div>
				<div className="col-span-full sm:col-span-2 text-gray-900">
                <label className="text-sm text-white">Race</label> <br />
  <select name="race" className="select py-1 rounded-lg lg:px-24 select-bordered">
    <option disabled selected>Pick one</option>
    <option>Bangali</option>
    <option>Chakma</option>

  </select>
  
				</div>
                <div className="col-span-full sm:col-span-2">
					<label className="text-sm">Age</label>
					<input name="age" type="text" placeholder="Age" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">Height (Count Centimeter)</label>
					<input name="height" type="text" placeholder="160 cm" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">Weight (kg)</label>
					<input type="text" name="weight" placeholder="75 kg" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
                
                <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Permanent Division</label>
                    <select name="permanentDivision" className="select py-1 text-gray-800 rounded-lg lg:px-24 select-bordered">
    <option disabled selected>Pick one</option>
    <option>Dhaka</option>
    <option>Chattagram</option>
    <option>Rangpur</option>
    <option>Barisal</option>
    <option>Khulna</option>
    <option>Maymansign</option>
    <option>Sylhet</option>

  </select>

				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Present Division</label>
                    <select name="presentDivision" className="select py-1 text-gray-800 rounded-lg lg:px-24 select-bordered">
    <option disabled selected>Pick one</option>
    <option>Dhaka</option>
    <option>Chattagram</option>
    <option>Rangpur</option>
    <option>Barisal</option>
    <option>Khulna</option>
    <option>Maymansign</option>
    <option>Sylhet</option>

  </select>
				</div>
                <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Mobile Number</label>
					<input name="mobileNumber" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Email</label>
					<input name="email" value={user.email}  type="text" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
				</div>

                <div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Expected Partner Age</label>
					<input name="expectedPartnerAge" type="text" placeholder="" className="w-full text-gray-900 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Expected Partner Height (cm)</label>
					<input name="expectedPartnerHeight" type="text" placeholder=" 165 cm" className="w-full text-gray-900 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Expected Partner Weight (kg)</label>
					<input name="expectedPartnerWeight" type="text" placeholder=" 65 kg" className="w-full text-gray-900 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
			</div>
		</fieldset>
        <input className="btn bg-rose-700 py-3 rounded-lg w-72" type="submit" value="Save And Publish Now" />
	</form>
</section>  
        </div>
    );
};

export default EditBiodata;