import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {

  return (
    <Link href={`/movies/${id}`} asChild >
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://placeholder.co/600x400/1a1a1a/ffffff.png' }}
          className='w-full h-48 rounded-lg'
          resizeMode='cover'
        />
        <View className='h-20 flex justify-between'>
          <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>
          <View className='flex-row items-center justify-start gap-x-1 mt-auto'>
            {[...Array(5)].map((_, i) => (
              <Image
                key={`star-${i}`}
                source={icons.star}
                className='size-4'
                style={{ opacity: i < Math.round(vote_average / 2) ? 1 : 0.3 }}
              />
            ))}
          </View>

          <View className='flex-row items-center justify-start gap-x-1 mt-auto'>
            {/* <Image source={icons.play} className='size-3' /> */}
            <Text className='text-xs text-white'>{release_date?.split('-')[0]}</Text>
            {/* <Text className='text-xs text-white'>|</Text>
            <Text className='text-xs text-white'>Movie</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard
