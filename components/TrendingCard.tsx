import { Link } from "expo-router"
import MaskedView from "@react-native-masked-view/masked-view"
import { View, Text, TouchableOpacity, Image } from "react-native"

import { images } from "@/constants/images"

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-28 relative pl-4">
        <Image
          source={{ uri: poster_url }}
          className="w-24 h-36 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute bottom-9 -left-3 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard
