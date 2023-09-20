import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { populationFilter } from '../filter/populationFilter'
import { Empty, Input, Select, Skeleton } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('')
    const emptyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const getCountries = async (api) => {
        setLoading(true)
        const response = await axios.get(api)
        setCountries(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getCountries('https://restcountries.com/v3.1/all')
    }, [])


    const handleChange = (region) => {
        getCountries(`https://restcountries.com/v3.1/region/${region}`)
    };

    const found = countries.find(i => i.name.common.toLowerCase().includes(searchText))

    return (
        <section>
            <div className="container py-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
                <Input
                    placeholder="Search by region"
                    size='large'
                    onChange={(e) => setSearchText(e.target.value)}
                    className='w-full sm:w-[300px] md:w-[400px] dark:placeholder:text-white'
                    suffix={<SearchOutlined />}
                />

                <Select
                    defaultValue="Filter by Region"
                    size='large'
                    className='w-full sm:w-[200px]'
                    options={[
                        {
                            value: 'africa',
                            label: 'Africa',
                        },
                        {
                            value: 'america',
                            label: 'America',
                        },
                        {
                            value: 'asia',
                            label: 'Asia',
                        },
                        {
                            value: 'europe',
                            label: 'Europe',
                        },
                        {
                            value: 'oceania',
                            label: 'Oceania',
                        },
                    ]}
                    onChange={handleChange}
                    loading={loading}
                />
            </div>

            <div className="container min-h-screen">
                <ul className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-10'>
                    {
                        loading ?
                            emptyArray.map((i, index) => {
                                return (
                                    <li key={index}>
                                        <Skeleton.Image className='!w-full !h-40' active={true} shape={'square'} />
                                        <div className='py-5'>
                                            <Skeleton.Input className='!w-full mb-3' active />
                                            <ul className='text-sm font-medium space-y-2'>
                                                <Skeleton.Input className='!w-full' active />
                                                <Skeleton.Input className='!w-full' active />
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                            :
                            countries.map((country, index) => {
                                return (
                                    <Link className={`${country.name.common.toLowerCase().includes(searchText) ? 'inline-block' : 'hidden'}`} key={index} to={`/countries/${country.name.common}`}>
                                        <li className='shadow-card-shadow dark:shadow-card-shadow-dark rounded-md overflow-hidden cursor-pointer dark:bg-dark-card dark:text-white' >
                                            <img className='w-full h-40 bg-cover bg-center' src={country.flags.png} alt={country.name.common} />
                                            <div className='p-5'>
                                                <h3 className='text-lg font-extrabold mb-2'>{country.name.common}</h3>
                                                <ul className='text-sm font-medium space-y-2'>
                                                    <li>Population: <span className='font-normal'>{populationFilter(country.population)}</span></li>
                                                    <li>Region: <span className='font-normal'>{country.region}</span></li>
                                                    <li>Capital: <span className='font-normal'>{country.capital}</span></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })
                    }
                </ul>

                {
                    !found &&
                    <div className='text-center pt-20'>
                        <Empty description={false} />
                    </div>
                }
            </div>
        </section>
    )
}

export default Countries