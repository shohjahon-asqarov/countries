import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { populationFilter } from '../filter/populationFilter'

const CountryDetail = () => {
    const [country, setCountry] = useState()
    const navigate = useNavigate()

    const { id } = useParams()

    const getCountry = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
        setCountry(response.data[0])
    }

    useEffect(() => {
        getCountry()
    }, [])

    return (
        <section className='min-h-[90vh]'>
            <div className="container pt-20">
                <button onClick={() => navigate(-1)} className='border border-gray py-2 px-6 rounded-md'>
                    <i className='bi bi-arrow-left mr-1'></i>
                    Back
                </button>

                {country &&
                    <div className="grid md:grid-cols-2 gap-10 items-center py-10">
                        <div>
                            <img className='w-full lg:w-11/12 h-full rounded-md' src={country?.flags.png} alt={country.name.common} />
                        </div>

                        <div className='space-y-6'>
                            <h3 className='text-3xl font-extrabold'>{country?.name.common}</h3>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <ul className='text-sm font-medium space-y-2'>
                                    <li>Population: <span className='font-normal'>{populationFilter(country?.population)}</span></li>
                                    <li>Region: <span className='font-normal'>{country?.region}</span></li>
                                    <li>Sub Region: <span className='font-normal'>{country?.subregion}</span></li>
                                    <li>Capital: <span className='font-normal'>{country?.capital}</span></li>
                                </ul>

                                <ul className='text-sm font-medium space-y-2 mt-3 sm:mt-0'>
                                    <li>Area: <span className='font-normal'>{country?.area} km<sup>2</sup></span></li>
                                    <li>Time Zone: <span className='font-normal'>{country?.timezones}</span></li>
                                    <li>Start of week: <span className='font-normal'>{country?.startOfWeek}</span></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default CountryDetail