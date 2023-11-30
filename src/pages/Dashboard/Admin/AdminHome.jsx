import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const AdminHome = () => {
  const axiosSecure = useAxiosSecure()
  const { data: biodatas } = useQuery({
    queryKey: ['biodatas'],
    queryFn: async () => {
      const res = await axiosSecure.get('/biodatas');
      return res.data;
    }
  })

  // console.log(biodatas);
  const malesBiodata = biodatas?.filter(males => males.biodataType === "Male");
  // console.log(malesBiodata);
  const femalesBiodata = biodatas?.filter(females => females.biodataType === "Female");
  const premiumBiodata = biodatas?.filter(data => data.member === "premium");

  const { data: contactRequests } = useQuery({
    queryKey: ['contactRequests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/contactRequests');
      return res.data;
    }
  })
  //   console.log(contactRequest.amount);
  const revenue = contactRequests?.reduce((total, item) => total + item.price, 0)
  // console.log(revenue);
  const biodata = (biodatas?.length)
  const male = (malesBiodata?.length)
  const female = (femalesBiodata?.length)
  const premium = (premiumBiodata?.length)

  const data = [
    { value: biodata, label: 'Biodata' },
    { value: male, label: 'Male' },
    { value: female, label: 'Female' },
    { value: premium, label: 'Premium' },
    { value: revenue, label: 'Revenue' },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  return (
    <div className=" px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white text-center">
        <div className="bg-gray-700 py-8 rounded-lg">
          <h1 className="text-3xl">Total Biodata</h1>
          <p className="text-xl pt-2"> {biodatas?.length}</p>
        </div>
        <div className="bg-gray-700 py-8 rounded-lg">
          <h1 className="text-3xl">Total Male Biodata</h1>
          <p className="text-xl pt-2"> {malesBiodata?.length}</p>
        </div>
        <div className="bg-gray-700 py-8 rounded-lg">
          <h1 className="text-3xl">Total Female Biodata</h1>
          <p className="text-xl pt-2"> {femalesBiodata?.length}</p>
        </div>
        <div className="bg-gray-700 py-8 rounded-lg">
          <h1 className="text-3xl">Premium Biodata</h1>
          <p className="text-xl pt-2"> {premiumBiodata?.length}</p>
        </div>
        <div className="bg-gray-700 py-8 rounded-lg">
          <h1 className="text-3xl">Total Revenue</h1>
          <p className="text-xl pt-2"> {revenue} Taka</p>
        </div>


      </div>
      <div className="mt-2 md:mt-10">
        <PieChart
          series={[
            {
              arcLabel: (item) => `${item.label} (${item.value})`,
              arcLabelMinAngle: 45,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
          }}
          {...size}
        />
      </div>

    </div>
  );
};

export default AdminHome;