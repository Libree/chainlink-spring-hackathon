declare type useScreenType = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};
declare const useScreen: () => useScreenType;
export default useScreen;
