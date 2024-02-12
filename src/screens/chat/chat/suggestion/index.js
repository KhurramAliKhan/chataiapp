import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {windowWidth} from '@theme/appConstant';
import LinearGradient from 'react-native-linear-gradient';
import {DottedLine} from '@commonComponents';
import Items from './items';
import Title from './title';
import Questions from './questions';
import styles from './styles';
import appColors from '../../../../theme/appColors';

export default suggestion = ({getValue, suggestions, setSuggestionModal}) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    checkSuggestion();
  }, []);

  const checkSuggestion = () => {
    if (suggestions.length > 0) {
      setQuestion(suggestions[0].questions);
    }
  };

  const [questions, setQuestion] = useState();
  const selectQuestions = (item, index) => {
    setSelected(index);
    setQuestion(item);
  };

  return (
    <View style={styles.main}>
      <LinearGradient
        colors={[
          appColors.modalBg,
          appColors.modalBg,
          appColors.modalBgLight,
          appColors.modalBgmedium,
          appColors.modalBgdark,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.9}}
        style={styles.gradient}>
        <View style={styles.details}>
          <Title setSuggestionModal={setSuggestionModal} />
          <DottedLine width={windowWidth(76)} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={suggestions}
            horizontal
            contentContainerStyle={styles.container}
            renderItem={({item, index}) => (
              <Items
                item={item}
                index={index}
                selected={selected}
                selectQuestions={selectQuestions}
              />
            )}
          />
          {questions && (
            <Questions
              getValue={getValue}
              questions={questions}
              setSuggestionModal={setSuggestionModal}
            />
          )}
        </View>
      </LinearGradient>
    </View>
  );
};
