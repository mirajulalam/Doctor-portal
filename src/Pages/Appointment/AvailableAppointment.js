import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading'
const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP");

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://agile-escarpment-54026.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-xl text-center text-secondary font-bold my-20'>Available Appointments on {format(date, "PP")}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                date={date}
                treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;