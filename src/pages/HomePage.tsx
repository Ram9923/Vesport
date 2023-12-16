import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-third-color w-full h-[4867px] overflow-hidden text-center text-13xl text-black font-philosopher">
      <div className="absolute top-[70px] left-[0px] w-[1440px] h-[820px] flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[-2px] [transform:scale(1.005)]"
          alt=""
          src="/homeheader@2x.png"
        />
      </div>
      <div className="absolute top-[890px] left-[0px] w-[1440px] h-[536px] text-[64px]">
        <div className="absolute top-[124px] left-[184px] flex items-center justify-center w-[1071px]">
          Unleash your inner beast and explore the world of sports at VeSport,
          where you'll find top-quality gear and equipment for athletes of all
          levels.
        </div>
        <img
          className="absolute top-[558px] left-[0px] w-[1440px] h-[820px] overflow-hidden object-cover"
          alt=""
          src="/animatd-images@2x.png"
        />
      </div>
      <div className="absolute top-[3264px] left-[0px] w-[1440px] h-[1333px] overflow-hidden">
        <img
          className="absolute top-[-1.5px] left-[-1px] w-[1447.5px] h-[1002.45px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className="absolute top-[1367px] left-[0px] w-[524px] h-[881px] object-cover"
          alt=""
          src="/addadsds-1@2x.png"
        />
      </div>
      <div className="absolute top-[2374px] left-[0px] bg-white w-[1440px] h-[820px] text-justify text-lg text-white">
        <div className="absolute top-[109px] left-[21px] w-[1039px] overflow-hidden flex flex-row flex-wrap items-start justify-start pt-9 px-10 pb-[30px] box-border gap-[10px]">
          <div className="relative rounded-11xl bg-white w-[474px] h-[326px] overflow-hidden shrink-0">
            <img
              className="absolute h-[100.43%] w-[100.29%] top-[0%] right-[0%] bottom-[-0.43%] left-[-0.29%] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_51px)] rounded-51xl bg-deepskyblue overflow-hidden flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-black">
              <div className="relative">Category</div>
            </div>
          </div>
          <div className="relative rounded-11xl bg-white w-[443px] h-[326px] overflow-hidden shrink-0">
            <img
              className="absolute h-[100.43%] w-[100.29%] top-[0%] right-[0%] bottom-[-0.43%] left-[-0.29%] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_50.5px)] rounded-51xl bg-deepskyblue overflow-hidden flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-black">
              <div className="relative">Category</div>
            </div>
          </div>
          <div className="relative rounded-11xl bg-white w-[300px] h-[206.14px] overflow-hidden shrink-0">
            <img
              className="absolute h-[100.43%] w-[100.29%] top-[0%] right-[0%] bottom-[-0.43%] left-[-0.29%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="absolute top-[calc(50%_-_16.07px)] left-[calc(50%_-_51px)] rounded-51xl bg-deepskyblue overflow-hidden flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-black">
              <div className="relative">Category</div>
            </div>
          </div>
          <div className="relative rounded-11xl bg-white w-[300px] h-[205.94px] overflow-hidden shrink-0">
            <img
              className="absolute h-[100.43%] w-[100.29%] top-[0%] right-[0%] bottom-[-0.43%] left-[-0.29%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="absolute top-[calc(50%_-_15.97px)] left-[calc(50%_-_51px)] rounded-51xl bg-deepskyblue overflow-hidden flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-black">
              <div className="relative">Category</div>
            </div>
          </div>
          <div className="relative rounded-11xl bg-white w-[300px] h-[206px] overflow-hidden shrink-0">
            <img
              className="absolute h-[100.43%] w-[100.29%] top-[0%] right-[0%] bottom-[-0.43%] left-[-0.29%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_51px)] rounded-51xl bg-deepskyblue overflow-hidden flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-black">
              <div className="relative">Category</div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[-111px] left-[914px] w-[583px] h-[1061px] object-cover"
          alt=""
          src="/aaaaaaa-1@2x.png"
        />
      </div>
      <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[446px] text-left text-white">
        <div className="absolute top-[-1px] left-[2px] w-[1439px] h-[447px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.019)]"
            alt=""
            src="/vector-2@2x.png"
          />
        </div>
        <div className="absolute top-[1.5px] left-[0px] w-[325.5px] h-[143.5px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.064)]"
            alt=""
            src="/vector-1@2x.png"
          />
        </div>
        <div className="absolute top-[-228px] left-[720px] w-[666px] h-[381px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[6px] top-[4px] [transform:scale(1.027)]"
            alt=""
            src="/imagesforfootballbootsforacompanycalledvesportwiththethemeslightblueandblackandwhitepngwithnobackground-2@2x.png"
          />
        </div>
        <div className="absolute top-[197px] left-[calc(50%_-_643px)] flex flex-row items-start justify-start gap-[43px]">
          <div className="relative w-[166px] h-[130px] text-center">
            <b className="absolute top-[0px] left-[0px] [text-decoration:underline]">
              PRODUCTS
            </b>
            <div className="absolute top-[41px] left-[3px] flex flex-col items-start justify-start gap-[4px] text-5xl">
              <div className="relative">Shoes</div>
              <div className="relative">Clothes</div>
              <div className="relative">Accessories</div>
            </div>
          </div>
          <div className="relative w-[116px] h-[223px]">
            <b className="absolute top-[0px] left-[0px] [text-decoration:underline]">
              SPORTS
            </b>
            <div className="absolute top-[41px] left-[1px] flex flex-col items-start justify-start gap-[4px] text-center text-5xl">
              <div className="relative">Running</div>
              <div className="relative">Football</div>
              <div className="relative">Basketball</div>
              <div className="relative">Yoga</div>
              <div className="relative">Tennis</div>
              <div className="relative">Training</div>
            </div>
          </div>
          <div className="relative w-[165px] h-[161px]">
            <b className="absolute top-[0px] left-[0px] [text-decoration:underline]">
              CATEGORY
            </b>
            <div className="absolute top-[41px] left-[1px] flex flex-col items-start justify-start gap-[4px] text-center text-5xl">
              <div className="relative">Men</div>
              <div className="relative">Women</div>
              <div className="relative">Kids</div>
              <div className="relative">Sale</div>
            </div>
          </div>
          <div className="relative w-[165px] h-[161px]">
            <b className="absolute top-[0px] left-[0px] [text-decoration:underline]">
              CATEGORY
            </b>
            <div className="absolute top-[41px] left-[1px] flex flex-col items-start justify-start gap-[4px] text-center text-5xl">
              <div className="relative">Men</div>
              <div className="relative">Women</div>
              <div className="relative">Kids</div>
              <div className="relative">Sale</div>
            </div>
          </div>
          <div className="relative w-[234px] h-[130px]">
            <b className="absolute top-[0px] left-[0px] [text-decoration:underline]">
              COMPANY INFO
            </b>
            <div className="absolute top-[41px] left-[1px] flex flex-col items-start justify-start gap-[4px] text-center text-5xl">
              <div className="relative">About Us</div>
              <div className="relative">Careers</div>
              <div className="relative">Press</div>
            </div>
          </div>
          <div className="relative w-[139px] h-48">
            <b className="absolute top-[0px] left-[0px] [text-decoration:underline]">
              SUPPORT
            </b>
            <div className="absolute top-[41px] left-[1px] flex flex-col items-start justify-start gap-[4px] text-center text-5xl">
              <div className="relative">Help</div>
              <div className="relative">Shipping</div>
              <div className="relative">Returns</div>
              <div className="relative">Vouchers</div>
              <div className="relative">StoreFinder</div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-center py-0 px-px gap-[20px]">
            <img
              className="relative rounded-3xs w-[40.5px] h-[40.06px] object-cover"
              alt=""
              src="/facebook@2x.png"
            />
            <div className="relative w-[41px] h-[41px]">
              <div className="absolute top-[0px] left-[0px] rounded bg-white w-[41px] h-[41px]" />
              <div className="absolute top-[9.5px] left-[8.5px] w-6 h-[22px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.161)]"
                  alt=""
                  src="/vector-4@2x.png"
                />
              </div>
            </div>
            <img
              className="relative w-[41px] h-[41px] object-cover"
              alt=""
              src="/instagram@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[70px] overflow-hidden">
        <img
          className="absolute top-[11px] left-[35px] w-[268px] h-12 object-cover cursor-pointer"
          alt=""
          src="/frame-11@2x.png"
          onClick={onFrameClick}
        />
        <div className="absolute top-[calc(50%_-_40px)] right-[211px] rounded-3xs overflow-hidden flex flex-row items-end justify-start py-1.5 px-4 gap-[5px]">
          <div className="bg-white box-border h-[67px] overflow-hidden flex flex-row items-center justify-start py-6 px-4 border-b-[3px] border-solid border-dark-blue">
            <div className="relative">Home</div>
          </div>
          <div className="bg-white h-[69px] flex flex-row items-center justify-start py-6 px-4 box-border">
            <div className="relative">Shop</div>
          </div>
          <div className="bg-white h-[69px] flex flex-row items-center justify-start py-6 px-4 box-border">
            <div className="relative">About Us</div>
          </div>
          <div className="bg-white h-[69px] flex flex-row items-center justify-start py-6 px-4 box-border">
            <div className="relative">Contact Us</div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_21px)] right-[16.5px] flex flex-row items-start justify-start py-0 px-px gap-[20px]">
          <img
            className="relative rounded-3xs w-[40.5px] h-[40.06px] object-cover"
            alt=""
            src="/facebook@2x.png"
          />
          <div className="relative w-[41px] h-[41px]">
            <div className="absolute top-[0px] left-[0px] rounded bg-black w-[41px] h-[41px]" />
            <div className="absolute top-[9.5px] left-[8.5px] w-6 h-[22px] flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.161)]"
                alt=""
                src="/vector-4@2x.png"
              />
            </div>
          </div>
          <img
            className="relative w-[41px] h-[41px] object-cover"
            alt=""
            src="/instagram@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
