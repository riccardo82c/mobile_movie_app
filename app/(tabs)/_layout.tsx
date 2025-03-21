import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { ImageBackground, Image, Text, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: any) => {

  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-[50px] mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image source={icon} tintColor="#151332" className='size-5' />
        <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>

      </ImageBackground>
    )
  } else {
    return (
      <View className='size-full justify-center items-center mt-4 rounded-full' >
        <Image source={icon} tintColor="#A8B5DB" className='size-5' />
      </View>
    )
  }
}

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 50,
          height: 50,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 0,
          borderColor: '#0f0d23',
          shadowColor: '#0f0d23',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 10,
        },
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"
            />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search', headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Search"
            />
          )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title="Saved"
            />)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title="Profile"
            />)
        }}
      />
    </Tabs>
  )
}

export default _Layout
