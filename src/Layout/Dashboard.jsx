import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaEdit, FaHome, FaPhone, FaRegAddressBook, FaStreetView, FaUserCog, FaUserGraduate, FaUserSecret } from "react-icons/fa";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
	const { user, logOut } = useAuth()
	const [isAdmin]  = useAdmin();
	const handlesignOut = () => {
		logOut()
			.then(() => console.log('User LogOut Success'))
			.catch(error => console.error(error))
	}
	return (
		<div className="flex md:flex-row flex-col mt-20">
			<div className="h-full p-3 space-y-2 w-72 bg-blue-950 text-gray-100">
				{user || isAdmin ? <div className="flex items-center p-2 space-x-4">
					<img src={user.photoURL} alt="" className="w-12 h-12 rounded-full bg-gray-500" />
					<div>
						<h2 className="text-lg font-semibold">   {user.displayName}</h2>
						<p>{user.email}</p>
						<span className="flex items-center space-x-1">
							<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">View profile</a>
						</span>
					</div>
				</div> :
					<></>

				}
				<div className="divide-y divide-gray-700">
					<ul className="pt-2 pb-4 space-y-1 text-sm">
						{
							isAdmin ? <>
								<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
									<NavLink to='/dashboard/adminhome' className="flex items-center p-2 space-x-3 rounded-md">

										<FaHome ></FaHome>

										<span>  Admin Dashboard </span>
									</NavLink>
								</li>
								<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
									<NavLink to='/dashboard/manageusers' className="flex items-center p-2 space-x-3 rounded-md">
										<FaUserCog></FaUserCog>
										<span> Manage Users </span>
									</NavLink>
								</li>
								<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
									<NavLink to='/dashboard/approvedpremium' className="flex items-center p-2 space-x-3 rounded-md">

										<FaUserGraduate />

										<span> Approved Premium </span>
									</NavLink>
								</li>
								<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
									<NavLink to='/dashboard/approvedcontactrequest' className="flex items-center p-2 space-x-3 rounded-md">

										<FaRegAddressBook />
										<span> Approved Contact Request </span>

									</NavLink>
								</li>
								<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
									<NavLink to='/dashboard/successStory' className="flex items-center p-2 space-x-3 rounded-md">

										<FaRegAddressBook />
										<span> Success Story </span>

									</NavLink>
								</li>
							</> : <> 
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<NavLink to="/dashboard/userhome" className="flex items-center p-2 space-x-3 rounded-md">
								<FaEdit />
								<span> User Home</span>
							</NavLink>
						</li>
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<NavLink to="/dashboard/editbiodata" className="flex items-center p-2 space-x-3 rounded-md">
								<FaEdit />
								<span> Edit Biodata</span>
							</NavLink>
						</li>
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<NavLink to="/dashboard/viewbiodata" className="flex items-center p-2 space-x-3 rounded-md">
								<FaStreetView />
								<span> View Biodata </span>
							</NavLink>
						</li>
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<NavLink to="/dashboard/contactrequest" className="flex items-center p-2 space-x-3 rounded-md">
								<FaPhone />
								<span> My Contact Request </span>
							</NavLink>
						</li>

						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<NavLink to="/dashboard/favouritebiodata" className="flex items-center p-2 space-x-3 rounded-md">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
									<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
								</svg>
								<span>Favourites Biodata</span>
							</NavLink>
						</li>
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<NavLink to="/dashboard/gotmarried" className="flex items-center p-2 space-x-3 rounded-md">
								<FaUserSecret />
								<span>Got Married</span>
							</NavLink>
						</li>
						</>}
					</ul>
					<ul className="pt-4 pb-2 space-y-1 text-sm">
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
									<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
									<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
								</svg>
								<span>Settings</span>
							</a>
						</li>
						<li className="bg-gray-600 py-2 hover:bg-blue-600 text-gray-50">
							<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-400">
									<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
									<rect width="32" height="64" x="256" y="232"></rect>
								</svg>
								<span onClick={handlesignOut} >Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Dashboard Content  */}
			<div className="flex-1">
				<Navbar></Navbar>
				<Outlet></Outlet>
			</div>

		</div>
	);
};

export default Dashboard;