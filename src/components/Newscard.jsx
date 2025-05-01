import React from 'react';
import { FaEye } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaBookmark } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";



const Newscard = ({ newsData }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating
  } = newsData;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="card bg-base-300 shadow-xl mb-10">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-xl text-gray-500">
          <button className="btn btn-ghost btn-sm"><FaBookmark /></button>
          <button className="btn btn-ghost btn-sm"><FaShareAlt /></button>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-4">
        <h1 className="text-lg font-bold">{title}</h1>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 pt-4">
        <img src={thumbnail_url} alt="News Thumbnail" className="rounded-xl w-full object-cover" />
      </figure>

      {/* Content */}
      <div className="px-5 py-4">
        <p className="text-gray-700">
          {details.length > 200 ? details.slice(0, 200) + '...' : details}
          {details.length > 200 && (
            <span className="text-primary font-semibold ml-1 cursor-pointer">
              Read More
            </span>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 pb-3">
        <div className="flex items-center text-warning gap-1">
          {Array.from({ length: Math.round(rating.number) }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-black font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
