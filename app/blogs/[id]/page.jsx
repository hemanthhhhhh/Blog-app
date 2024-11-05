'use client'
import { assets, blog_data } from '@/Assets/posts'
import Footer from '@/Components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Page = ({ params }) => {
    const [data, setData] = useState(null)

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i])
                console.log(blog_data[i])
                break
            }
        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    return (
        data ?
            <>
                <div className='bg-gray-200 px-5 py-5 md:px-12 lg:px-28'>
                    <div className='flex justify-between items-center'>
                        <Link href='/'>
                            <Image src={assets.logo} width={100} alt='' className='sm:w-auto w-[130px]' />
                        </Link>
                        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-md'>
                            Get Started <Image alt='' src={assets.arrow} />
                        </button>
                    </div>
                    <div className='text-center my-24'>
                        <h1 className="text-2xl sm:text-5xl font-semibold mx-auto max-w-[700px]">{data.title}</h1>
                        <p className='mt-1 text-lg max-w-[740px] mx-auto pb-2'>{data.author}</p>
                        <h3>{data.date}</h3>
                    </div>
                </div>
                <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                    <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
                    <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
                    <p>{data.description}</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
                    <p className='my-3 '>Before you can manage your lifestyle, you must have a clear understanding what you want to achieve. Start by reflectiog on your values, aspirations, and long-term goals.</p>
                    <p className='my-3 '>Before you can manage your lifestyle, you must have a clear understanding what you want to achieve. Start by reflectiog on your values, aspirations, and long-term goals.</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
                    <p className='my-3 '>Before you can manage your lifestyle, you must have a clear understanding what you want to achieve. Start by reflectiog on your values, aspirations, and long-term goals.</p>
                    <p className='my-3 '>Before you can manage your lifestyle, you must have a clear understanding what you want to achieve. Start by reflectiog on your values, aspirations, and long-term goals.</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
                    <p className='my-3 '>Before you can manage your lifestyle, you must have a clear understanding what you want to achieve. Start by reflectiog on your values, aspirations, and long-term goals.</p>
                    <p className='my-3 '>Before you can manage your lifestyle, you must have a clear understanding what you want to achieve. Start by reflectiog on your values, aspirations, and long-term goals.</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
                    <p className='my-3 '>Managing your lifestyle that requires commitment and self-awareness . By following this step-by-step</p>
                    <div className='my-24'>
                        <p className='text-black font-semibold my-4'>Share this article on social media.</p>
                        <div className='flex'>
                            <Image src={assets.facebook_icon} width={50} alt='' />
                            <Image src={assets.twitter_icon} width={50} alt='' />
                            <Image src={assets.googleplus_icon} width={50} alt='' />
                        </div>
                    </div>
                </div>
                <Footer />
            </> : <></>
    )
}

export default Page
