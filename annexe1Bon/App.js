import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Chanson() {
  const nom = "L'autre hémisphère";
  return (
    <SafeAreaView >
      <Text style= {[style.conteneur, style.texte]}>{nom}</Text>
    </SafeAreaView>
  );
}
// export default function Playlist()
// {
//   return(
//     <SafeAreaView>
//         <Chanson/>
//         <Chanson/>
//         <Chanson/>
//         <Chanson/>
//     </SafeAreaView>
   
//   )
// }
// export default function Playlist()
// {
//   const tab = []
//   for(let i =0; i< 8; i++){
//     tab[i] = <Chanson key= {i}/>
//   }
//   return(
//     <SafeAreaView>
//       {tab}
//     </SafeAreaView>
   
//   );
// }
export default function Playlist()
{
  const tab = []
  for(let i =0; i< 8; i++){
     tab[i] = <View style ={style.ligne}> <Chanson/> <Chanson/></View >
  }
  return(
    <SafeAreaView style ={style.padding}>
      {tab}
    </SafeAreaView>
  )
}




const style = StyleSheet.create(
  {texte:{
    fontSize: 20,
    fontStyle: 'italic'
  },
  conteneur: {
    backgroundColor :"#ee33d1",
    margin : 2, //les unités sont en dp
    borderRadius : 7,
    padding: 6
  },
  ligne :{
    flexDirection: 'row',
    justifyContent :'space-between'

  }
}
)