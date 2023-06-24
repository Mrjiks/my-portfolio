import Link from "next/link";
import React from "react";

const getData = async () => {
  const data = await fetch("https://www.reddit.com/.json");

  return data.json();
};

const Posts = async () => {
  const { data } = await getData();

  const workingData = data.children?.map((data) => data?.data);

  return (
    <div>
      <h2 className='text-2xl text-teal-700'>Reddit Posts</h2>
      <div className='flex flex-col gap-3 py-4'>
        {workingData.map((data, index) => {
          return (
            data &&
            data.selftext && (
              <div key={index} className='flex flex-col gap-3 '>
                <p className='text-2xl text-teal-700'>{data.title}</p>
                <p className='text-gray-100 text-justify leading-8 '>{data?.selftext}...</p>
                <p className='text-blue-300'>
                  <span className='mr-4'>Comments: {data.num_comments}</span>
                  <Link href={`https://www.reddit.com/${data.permalink}`}>Read More</Link>
                </p>
                <p className='text-teal-600  mt-1 '>{data.author}</p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
