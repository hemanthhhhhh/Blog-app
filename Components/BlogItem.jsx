import { assets, blog_data } from '@/Assets/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-xl'>
            <Link href={`/blogs/${id}`}>
                <Image src={image} alt='' width={400} height={400} className='border-b border-black' />
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className='p-5'>
            <Link href={`/blogs/${id}`} className='inline-flex items-center font-semibold text-center'>
                    <h5 className='mb-2 font-medium text-lg tracking-tight text-gray-900'>{title}</h5>
                    </Link>
                    <p className='mb-3 tracking-tight text-gray-700 text-sm,'>{description}</p>
                <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                    Read more <Image src={assets.arrow} className='ml-2' alt='' width={12} />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem
