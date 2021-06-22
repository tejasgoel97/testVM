import HeroFeatures from "./HeroFeatures";
import HeroCallback from "./HeroCallback";

const Hero = () => {
  return (
    <div className="bg-primary">
      <div className="container pt-3">
        <div className="row  py-4 ">
          <div className="col-lg-8">
            <h1 className="text-white text-center">
              Private Limited Comany Registration
            </h1>
            <h3 className="text-white text-center py-2 ">
              Start your Private limited Company <br />
              in less then 10 minutes
            </h3>
            <HeroFeatures />
          </div>
          <div className="col-lg-4">
            <HeroCallback />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
