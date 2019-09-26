import React from "react";
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

// const Slider = ({ row }) => {
//   return <Slide />;
// };

// const Slider = ({ row }) => {
//   if (row.data.length > 0) {
//     const movieList = row.data.map(movie => {
//       return <Slide key={movie.id} movie={movie} />;
//     });
//     return <div className="slider">{movieList}</div>;
//   } else {
//     return null;
//   }
// };

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
    console.log("goToPrevSlide");
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
    console.log("goToNextSlide");
  };

  render() {
    const row = this.props.row.data;

    return (
      <div className="slider">
        {row.map((movie, i) => (
          <Slide key={i} movie={movie} />
        ))}

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

export default Slider;
