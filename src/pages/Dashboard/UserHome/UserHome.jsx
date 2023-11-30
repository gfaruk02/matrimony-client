import { Helmet } from "react-helmet-async";


const UserHome = () => {
    return (
        <div className="w-3/4 mx-auto">
             <Helmet>
                <title>Matrimony | Userhome</title>
            </Helmet>
             {/* <h3 className="text-3xl font-bold">Welcome to Matrimony</h3> */}
             <img className="h-[90vh]" src="https://i.ibb.co/vLLyNYL/WELCOME-Graphics-5632158-1.jpg" alt="" />
             
        </div>
    );
};

export default UserHome;