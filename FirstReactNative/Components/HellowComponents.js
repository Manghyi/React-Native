import React, {useState} from 'react';
import {Text, View, Switch, FlatList} from 'react-native';

const HellowComponents = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  // 스위치 컴포넌트
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // 플렛 리스트 컴포넌트
  const FlatDATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;

  // 세션 리스트 컴포넌트
  const SectionDATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>버튼 컴포넌트</Text>
      <Button>버튼</Button>
      <Text>스위치 컴포넌트</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>리스트 컴포넌트</Text>
      <FlatList
        data={FlatDATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text>세션 리스트 컴포넌트</Text>
      <SectionList
        sections={SectionDATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default HellowComponents;
