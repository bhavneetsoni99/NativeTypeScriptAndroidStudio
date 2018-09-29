import React, { Component } from "react";
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete";
import { Text, Image } from "react-native";
import key from "../apikey";
// interface Props {
//     any;
// }

interface State {
  selectedAddress: any;
}
export default class AddressSearchComponent extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedAddress: ""
    };
  }

  public render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        getDefaultValue={() => ""}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: key,
          language: "en", // language of the results
          types: "(cities)" // default: 'geocode'
        }}
        styles={{
          textInputContainer: {
            width: "100%"
          },
          description: {
            fontWeight: "bold"
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
          }
        }}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance",
          types: "food"
        }}
        filterReverseGeocodingByTypes={[
          "locality",
          "administrative_area_level_3"
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        textInputProps={
          {
            //   onChangeText: text => {
            //     if (!text.length) {
            //       this.address = "";
            //       this.latlng = null;
            //     }
            //   }
          }
        }
        renderDescription={row => row.description || row.vicinity}
        onPress={(data, details = null) => {
          console.log(data, details);
          if (details && details.formatted_address) {
            this.setState({ selectedAddress: details.formatted_address });
          }
          if (details && details.geometry && details.geometry.location) {
            this.latlng = details.geometry.location;
          }
        }}
        // styles={{
        //   textInputContainer: {
        //     width: "100%",
        //     backgroundColor: "white",
        //     borderTopWidth: 0
        //   },
        //   textInput: {
        //     backgroundColor: "white",
        //     fontFamily: Fonts.regular,
        //     color: Colors.gray_regular
        //   },
        //   description: {
        //     fontFamily: Fonts.bold,
        //     color: Colors.gray_bold
        //   },
        //   predefinedPlacesDescription: {
        //     color: Colors.accent_color
        //   }
        // }}
        renderLeftButton={() => {}}
        renderRightButton={() => {}}
      />
    );
  }
}
