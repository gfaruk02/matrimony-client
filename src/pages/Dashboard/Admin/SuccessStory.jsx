import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SuccessStory = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews');
            return res.data;
        }
    })

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div>
            <div className="container px-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leadi text-gray-800">Matrimony Couple Success Story</h2>
                <div className="overflow-x-auto">
                    <table className="w-3/4 p-6 text-xs whitespace-nowrap text-center">
                        <thead>
                            <tr className="bg-gray-700">
                                <th className="p-3">#</th>
                                <th className="p-3">Male Id</th>
                                <th className="p-3"> Female Id</th>
                                <th className="p-3"> Marriage Date</th>
                                <th className="p-3">Success Story</th>

                            </tr>
                        </thead>
                        <tbody>

                            {reviews.map((story, index) =>

                                <tr key={story._id} className="border-b text-gray-800 border-opacity-20 dark:border-gray-700 dark:bg-gray-900 text-center">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{story.yourbiodatnumber}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{story.partnerbiodatnumber}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{story.marriageDate}</p>

                                    </td>
                                    <td className="p-3">
                                        {/* <p>{story.review}</p> */}
                                        <div>
      <Button onClick={handleOpen}>View Success Story</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Happy Couple Success Story
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         <img src= {story.photo} alt="" />
          {story.review}
          </Typography>
        </Box>
      </Modal>
    </div>

                                    </td>

                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;