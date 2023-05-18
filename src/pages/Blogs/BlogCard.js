import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {title, description, image, _id} =blog;
    return (
<article
  class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
>
  <img
    alt="Office"
    src={image}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <Link to={`/blog/${_id}`}>
      <h3 class="text-lg font-medium text-universal">
        {title}
      </h3>
    </Link>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      {description.substring(0, 200)}
    </p>

    <Link
      to={`/blog/${_id}`}
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-universal"
    >
      Read More

      <span
        aria-hidden="true"
        class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &rarr;
      </span>
    </Link>
  </div>
</article>
    );
};

export default BlogCard;