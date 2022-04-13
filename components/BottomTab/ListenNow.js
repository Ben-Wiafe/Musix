import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  SafeAreaView,
} from "react-native";
import React,{useRef} from "react";
import { useHeaderHeight } from '@react-navigation/elements';

const DATA = [
  {
    key: "1",
    text: "Aliqua fugiat tempor elit excepteur in nisi Lorem adipisicing ex aliqua dolore anim Lorem.Duis deserunt occaecat aliqua deserunt proident ut tempor.Ut duis minim commodo eu incididunt mollit occaecat.Ipsum voluptate magna eu esse pariatur do sit.Culpa ullamco incididunt anim duis velit nostrud nisi pariatur cillum occaecat esse.Nulla qui sint commodo ex.Aute est consequat adipisicing magna esse minim laborum.Voluptate enim incididunt consequat mollit Lorem nisi laborum minim voluptate.",
  },
  {
    key: "2",
    text: "Est deserunt irure minim dolore pariatur est cillum proident cillum aliqua ullamco.Aliqua do incididunt commodo id nisi Lorem Lorem proident qui.Reprehenderit tempor sit duis mollit ex elit commodo duis anim consectetur.Elit exercitation elit cillum dolore tempor officia ullamco ad ad consectetur.Excepteur elit labore deserunt laboris aliquip eu occaecat consequat id irure duis.Veniam veniam aute deserunt excepteur laboris excepteur laborum cupidatat consequat pariatur quis.Mollit exercitation reprehenderit exercitation consequat ullamco aute aliquip cupidatat dolore velit officia excepteur aute sunt.",
  },
  {
    key: "3",
    text: "Elit incididunt mollit amet est reprehenderit velit.Et id do laborum ad non consectetur.Do sunt elit pariatur eiusmod enim cillum officia reprehenderit commodo et irure sint laborum id.Sit nostrud dolor quis laboris consectetur aute consequat.Eiusmod est consequat irure cupidatat mollit labore eu tempor consequat commodo consectetur fugiat dolor.Qui reprehenderit voluptate pariatur deserunt.Labore amet elit officia proident officia in nisi.",
  },
  {
    key: "4",
    text: "Magna sunt id deserunt elit nulla.Fugiat in ipsum ex consectetur non Lorem excepteur elit fugiat tempor nisi enim fugiat.Pariatur sunt ad laboris est officia.Cupidatat amet ullamco fugiat consequat.Ad voluptate et aute dolore do proident nulla duis laboris sunt consequat dolore.Aute velit do aliquip consequat cupidatat anim nostrud officia ex excepteur.Occaecat excepteur minim nostrud irure id anim eiusmod veniam culpa.Anim nostrud nostrud do culpa.Lorem deserunt reprehenderit do quis deserunt adipisicing aute ex.Aliquip aliquip proident amet in aute ex consequat consectetur incididunt qui aliquip minim.Sit dolore minim ad pariatur adipisicing.Laborum pariatur ea excepteur incididunt.",
  },
  {
    key: "5",
    text: "Pariatur qui quis aliqua proident Lorem dolor velit do mollit sint ex amet duis ad.Nulla et do ut laborum ad occaecat ea consectetur consequat magna anim minim nisi.Mollit minim consectetur consectetur ex dolor exercitation laboris ad.Non in veniam fugiat Lorem.Commodo mollit culpa id ad tempor duis velit qui qui ex non laboris commodo minim.Dolore cillum aliquip dolor occaecat tempor pariatur laborum velit et et reprehenderit sunt id veniam.Reprehenderit sunt aute occaecat anim sint ullamco sint consequat officia elit veniam quis.Veniam voluptate nulla laborum consequat non aliqua occaecat aliqua qui nisi cupidatat incididunt laboris.Nostrud laboris incididunt culpa exercitation qui labore Lorem dolor reprehenderit.",
  },
  {
    key: "6",
    text: "Adipisicing fugiat nulla eu incididunt aute consectetur nisi laboris irure anim ad do.Nulla cupidatat sit dolor cupidatat cillum et non eiusmod et anim reprehenderit nisi laboris incididunt.Cupidatat labore ipsum ut dolor ea consequat.Elit qui amet proident ex aliqua excepteur esse pariatur.Incididunt cupidatat deserunt laboris mollit laboris sit sit irure tempor.Lorem nulla eiusmod esse est proident.Amet fugiat et reprehenderit minim minim ullamco ullamco ad laborum laborum elit.Ipsum voluptate ea sit laborum exercitation.Non ad nisi duis labore pariatur velit minim amet mollit ullamco amet.Laborum ipsum nostrud excepteur enim officia tempor.Sint esse minim voluptate aliquip cillum consectetur nostrud deserunt consectetur esse voluptate tempor elit sunt.",
  },
  {
    key: "7",
    text: "Pariatur anim aliquip in laborum aliqua reprehenderit culpa commodo dolor ea irure duis deserunt.Fugiat irure consectetur reprehenderit nulla in non.Tempor aliqua dolore pariatur ullamco.Amet amet officia voluptate cupidatat amet.Tempor magna Lorem irure proident pariatur aute.Lorem eiusmod aliquip esse irure minim exercitation ullamco ad aute ad amet culpa.Velit aliquip sint sit ex consectetur incididunt aliquip occaecat est do.Exercitation ullamco dolore nostrud enim fugiat ex aliqua minim qui magna in eiusmod.Aliqua voluptate proident est quis est amet excepteur minim voluptate officia tempor irure.Culpa pariatur est ut adipisicing culpa nisi quis elit qui laboris reprehenderit.",
  },
];

export default function ListenNow() {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
 const scrollY = useRef(new Animated.Value(0));
 const handleScroll = Animated.event (
   [
   {
     nativeEvent: {
       contentOffset: {y:scrollY.current}
     },
    },
  ],
  {
    useNativeDriver: true,
  }
 );
 const headerHeight = useHeaderHeight();
 const scrollYClamped = Animated.diffClamp(scrollY.current, 0,headerHeight)
  
 const translateY = scrollYClamped.interpolate({
  inputRange: [0, headerHeight],
  outputRange: [0, -(headerHeight / 2)],
  });
 const translateYNumber = useRef();
 translateY.addListener(({value}) => {
   translateYNumber.current = value;
 });
 
 return (
    <SafeAreaView>
      <AnimatedFlatList
        // keyExtractor={(item,index) => index.toString()}
        ListHeaderComponent={() => (
          <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
            <Text style={styles.headerText}>Listen Now</Text>
          </Animated.View>
        )}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.textView}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  textView: {
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "black",
    padding: 0,
  },
  header: {
    backgroundColor: "#78FECF",
    padding: 10,
  },
  headerText: {
    fontSize: 29,
    fontWeight: "700",
    paddingHorizontal: 10,
    fontFamily: "monospace",
  },
});
