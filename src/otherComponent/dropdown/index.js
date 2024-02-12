import React, {useState, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from '@utils/icons';
import styles from './styles';
import {useValues} from '@utils/context';
import {windowWidth} from '@theme/appConstant';
import Options from './options';

export function DropDown({
  title,
  label,
  data,
  buttonStyle,
  dropdownStyle,
  style,
  onSelect,
}) {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const {viewRTLStyle, textRTLStyle, t} = useValues();

  setTimeout(() => {
    DropdownButton.current != null && openDropdown();
  },100);

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, px, py) => {
      setDropdownTop(py + h);
      setDropdownLeft(px);
    });
  };

  const getSelected = data => {
    console.log(data);
    setSelected(data);
    onSelect(data);
  };

  return (
    <View style={style ? style : [styles.items, {flexDirection: viewRTLStyle}]}>
      <Text
        style={[
          styles.title,
          {
            textAlign: textRTLStyle,
            marginHorizontal: style ? windowWidth(4) : 0,
          },
        ]}>
        {t(title)}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        ref={DropdownButton}
        style={[
          styles.button,
          {
            ...buttonStyle,
            flexDirection: viewRTLStyle,
          },
        ]}
        onPress={() => {
          setVisible(true);
        }}>
        <Options
          visible={visible}
          setVisible={setVisible}
          dropdownTop={dropdownTop}
          dropdownLeft={dropdownLeft}
          dropdownStyle={dropdownStyle}
          data={data}
          onSelect={getSelected}
        />
        <Text style={[styles.buttonText, {textAlign: textRTLStyle}]}>
          {t(selected && selected.label) || t(label)}
        </Text>
        <Dropdown />
      </TouchableOpacity>
    </View>
  );
}
