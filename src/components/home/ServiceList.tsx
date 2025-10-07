import React, { JSX } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import PaddingWrapper from '../wrappers/PaddingWrapper'
import { services } from '@/constants/data'
import CommonAnimation from '../shared/CommonAnimation'

function ServiceList() {
    return (
        <PaddingWrapper>
            <CommonAnimation>
                <div className="w-full justify-center gap-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {
                        services.map(item=>(
                            <ServiceListItem key={item.heading} service={item} />
                        ))
                    }
                </div>
            </CommonAnimation>
        </PaddingWrapper>
    )
}

export default ServiceList

interface Service {
    icon: JSX.Element;
    heading: string;
    content: string;
  }
  function ServiceListItem({ service }: { service: Service }) {
    return (
        <div className="text-center flex-col bg-slate-100 pt-8 p-6 gap-3 flex rounded-lg duration-500 hover:-translate-y-6 shadow-md hover:shadow-lg">
            <span className='text-primary mx-auto text-8xl'>
                {service.icon}
            </span>
            <p className="text-4xl mt-6 font-medium">{service.heading}</p>
            <p className="text-lg">{service.content}</p>
        </div>
    )
}
