import React from 'react';
import { isEmpty } from 'lodash';

interface MovieListProps {
  children: React.ReactNode;
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ children, title }) => {
  if (isEmpty(children)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};
export default MovieList;
