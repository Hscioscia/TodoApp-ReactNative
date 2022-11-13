import React from "react";
import { FlatList } from "react-native";
import { styles } from "../../styles";

const Flist = ({renderItem, taskList}) =>{
    return(
        <FlatList 
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    );
};

export default Flist;