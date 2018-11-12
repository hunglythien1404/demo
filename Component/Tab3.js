import React from 'react';
import {View, Text, FlatList, Image, ToastAndroid} from 'react-native';
import {styles} from './../Styles';
import {connect} from 'react-redux';
import  * as actions from './../actions/dataTab';

class Tab3 extends React.Component {
  //get data from source JSONPLACEHOLDER
  componentDidMount() {
    this.props.getData();
  }

  //actions when user pull to refresh
  handleRefresh = () => {
    ToastAndroid.show("Refresh", ToastAndroid.SHORT);
  };

  //actions when user loadmore
  handleLoadMore = () => {
    ToastAndroid.show("Đã load hết dữ liệu", ToastAndroid.SHORT);
  };

  render() {
    return (
      <View>
        <FlatList
          refreshing={false}
          onRefresh={() => this.handleRefresh()}
          onEndReachedThreshold={0.2}
          onEndReached={() => this.handleLoadMore()}
          data={this.props.data ? this.props.data : null}
          keyExtractor={(data, index) => {index}}
          renderItem={(data) => {
            return(
              <View key={data.index} style={styles.flatList}>
                <Image
                  source={require ("./../images/gmo.png")}
                  style={styles.flatListImage}
                />
                <View style={styles.flatListContent}>
                  <Text style={styles.itemTitle}>{data.item.id}</Text>
                  <Text style={styles.itemTitle}>{data.item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataTab3,
  }
};

const mapDisPatchToProps = (dispatch, props) => {
  return {
    getData: () => {
      dispatch(actions.getDataTab3());
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps) (Tab3);