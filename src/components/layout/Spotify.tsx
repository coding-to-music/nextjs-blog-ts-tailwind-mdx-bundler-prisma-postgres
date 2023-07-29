import clsx from 'clsx';
import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import { Tooltip } from 'react-tippy';

import NextImage from '@/components/images/NextImage';
import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

// Remove the import for useSWR and SpotifyData since we won't use them

export default function Spotify({
  className,
  ...rest
}: Omit<UnstyledLinkProps, 'href' | 'children'>) {
  // Remove the useSWR hook and data related to Spotify

  // The component will return the UI without the Spotify functionality
  return (
    <figure className={className} data-cy='spotify'>
      <Tooltip
        trigger='mouseenter'
        interactive
        html={
          <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
            <p>Currently playing on my Spotify</p>
          </div>
        }
      >
        <UnstyledLink
          {...rest}
          href='#' // Replace '#' with an appropriate link
          className={clsx(
            'relative flex items-center gap-4 p-3',
            'border dark:border-gray-600',
            'border-thin w-72 rounded-md',
            'shadow-sm dark:shadow-none',
            'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          )}
        >
          <NextImage
            useSkeleton
            className='w-16 shadow-sm dark:shadow-none'
            src='your-placeholder-image-url.jpg' // Replace with a placeholder image URL
            alt='Album' // Replace with an appropriate alt text
            width={640}
            height={640}
            unoptimized
          />
          <div className='flex-1'>
            <p className='text-sm font-medium'>Song Title</p>{' '}
            {/* Replace with an appropriate song title */}
            <p className='mt-1 text-xs text-gray-600 dark:text-gray-300'>
              Artist Name
            </p>{' '}
            {/* Replace with an appropriate artist name */}
          </div>
          <div className='absolute bottom-1.5 right-1.5'>
            <SiSpotify size={20} color='#1ED760' />
          </div>
        </UnstyledLink>
      </Tooltip>
    </figure>
  );
}
