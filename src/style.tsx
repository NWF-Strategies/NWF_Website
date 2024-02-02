const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  paragraph:
    "font-poppins font-normal text-primary md:text-[15px] text-[13px] leading-[25px] xs:leading-[30.8px]",

  paragraph2:
    "text-white font-poppins lg:text-[25px] md:text-[20px] sm:text-[15px] font-normal leading-normal",

    
  heading1: `text-[#43BCCD] font-poppins lg:text-[90px] text-[50px] font-bold leading-relaxed text-left `,    
  heading2:
    "text-secondary font-poppins font-black xs:text-[48px] text-[40px] xs:leading-[70px] leading-[60px] w-full",
  heading3:
    "font-poppins font-normal md:text-[30px] text-[22px] text-white leading-normal tracking-normal w-full",
  heading4:
    "font-poppins font-semibold	xs:text-20px text-[#43BCCD] tracking-[0.15px]",
  heading5:
    "font-poppins tracking-tighter font-[1000] bold text-[#43BCCD] sm:leading-[5rem] md:text-[50px] sm:text-[55px] text-[40px]",

  callout: "font-poppins bg-[#185767] h-fit rounded-2xl p-10 m-5 mission-card",

  button:
    "bg-none hover:bg-secondaryButton border border-secondaryButton text-secondary hover:text-white w-fit rounded-2xl py-1 px-4 font-poppins font-light mt-5",

  form: "bg-black-gradient appearance-none border-2 border-secondary rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-white",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
